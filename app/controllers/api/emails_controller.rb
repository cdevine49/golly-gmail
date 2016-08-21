class Api::EmailsController < ApplicationController
  before_action :require_logged_in!
  def index
    case params[:path]
    when 'starred'
      @emails = Email
      .where("(emails.to = ? AND emails.received = ?) OR (emails.from_email = ? AND emails.received = ?)", current_user.gollygmail, true, current_user.gollygmail, false)
      .where(starred: true)
    when 'important'
      @emails = Email
      .where("(emails.to = ? AND emails.received = ?) OR (emails.from_email = ? AND emails.received = ?)", current_user.gollygmail, true, current_user.gollygmail, false)
      .where(important: true)
    when 'outbox'
      @emails = Email
      .where("emails.from_email = ? AND emails.sent = ? AND emails.received = ?", current_user.gollygmail, true, false)
    when 'search-results'
      @emails = Email
      .where("(emails.to = ? AND emails.received = ?) OR emails.from_email = ?", current_user.gollygmail, true, current_user.gollygmail)
      .search_emails(params[:query])
    when 'drafts'
      @emails = Email
      .where("emails.from_email = ?", current_user.gollygmail)
      .where("emails.sent = ?", false)
    else
      @emails = Email
      .where("emails.to = ?", current_user.gollygmail)
      .where("received = ?", true)
    end
    @emails = @emails
    .order(created_at: :desc)
    .page(params[:page]).per(50)
  end

  def show
    @email = Email
    .where("emails.id = ?", params[:id])

    @email = @email.order(created_at: :desc).first
    if @email
      render :show
    else
      render json: {}
    end
  end

  def create
    email = Email.new(email_params)
    email.from_name = current_user.first_name + ' ' + current_user.last_name
    email.from_email = current_user.gollygmail
    email.read = true unless email.received
    if email.save
      if email.received
        to = User.find_by(gollygmail: email.to)
        if to
          sendEmail(to.id, "NEW_EMAIL")
        else
          EmailMailer.send_email(email).deliver_later
        end
      end
      render json: email
    else
      render json: { message: "No such user" }
    end
  end

  def update
    @email = Email.find_by(id: params[:id])
    if @email && @email.update(email_params) && (!params[:sent] || user = User.find_by(gollygmail: email.to))
      render :show
    else
      render json: { message: "Couldn't update"}
    end
  end

  private
  def email_params
    params.require(:email).permit(
      :subject, :body, :to, :image,
      :starred, :important, :sent,
      :received, :read, :page, :query)
  end

end
