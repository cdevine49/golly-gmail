class Api::EmailsController < ApplicationController
  before_action :require_logged_in!
  def index
    case params[:path]
    when 'starred'
      @emails = Email
      .where("emails.to = ? OR emails.from_email = ?", current_user.gollygmail, current_user.gollygmail)
      .where(starred: true)
      .where(sent: true)
    when 'important'
      @emails = Email
      .where("emails.to = ? OR emails.from_email = ?", current_user.gollygmail, current_user.gollygmail)
      .where(important: true)
      .where(sent: true)
    when 'outbox'
      @emails = Email
      .where("emails.from_email = ?", current_user.gollygmail)
      .where(sent: true)
    when 'search-results'
      @emails = Email
      .search_emails(params[:query])
      .where("emails.to = ? OR emails.from_email = ?", current_user.gollygmail, current_user.gollygmail)
      .where(sent: true)
    when 'drafts'
      @emails = Email
      .where("emails.from_email = ?", current_user.gollygmail)
      .where(sent: false)
    else
      @emails = Email
      .where("emails.to = ?", current_user.gollygmail)
      .where(sent: true)
    end
    @emails = @emails
    .order(created_at: :desc)
    .page(params[:page]).per(50)
  end

  def show
    @email = Email
    .where("emails.id = ?", params[:id])
    case params[:path]
    when 'starred'
      @email
      .where("emails.to = ? OR emails.from_email = ?", current_user.gollygmail, current_user.gollygmail)
      .where(starred: true)
      .where(sent: true)
    when 'important'
      @email
      .where("emails.to = ? OR emails.from_email = ?", current_user.gollygmail, current_user.gollygmail)
      .where(important: true)
      .where(sent: true)
    when 'outbox'
      @email
      .where("emails.from_email = ?", current_user.gollygmail)
      .where(sent: true)
    when 'search-results'
      @email
      .where("emails.to = ? OR emails.from_email = ?", current_user.gollygmail, current_user.gollygmail)
      .where(sent: true)
    when 'inbox'
      @email
      .where("emails.to = ?", current_user.gollygmail)
      .where(sent: true)
    when 'drafts'
      @email
      .where("emails.from_email", current_user.gollygmail)
      .where(sent: false)
    end
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
    if email.save
      render json: email
    else
      render json: { message: "No such user" }
    end
  end

  def update
    @email = Email.find_by(id: params[:id])
    if @email.update(email_params)
      if !params[:sent]
        render :show
      elsif user = User.find_by(gollygmail: email.to)
        # sendEmail(user.id, "NEW_EMAIL")
        render :show
      end
    else
      render json: { message: "Couldn't update"}
    end
  end

  private
  def email_params
    params.require(:email).permit(
      :subject, :body, :to, :image,
      :starred, :important, :sent,
      :read, :page, :query)
  end

end
