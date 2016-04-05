class Api::EmailsController < ApplicationController
  def index
    case params[:path]
    when 'starred'
      @emails = Email.where("emails.to = ? OR emails.from_email = ?", current_user.gollygmail, current_user.gollygmail)
      .where(starred: true)
      .order(created_at: :desc)
      # .page(params[:page])
    when 'important'
      @emails = Email.where("emails.to = ? OR emails.from_email = ?", current_user.gollygmail, current_user.gollygmail)
      .where(important: true)
      .order(created_at: :desc)
    when 'sent'
      @emails = Email.where("emails.from_email = ?", current_user.gollygmail)
      .order(created_at: :desc)
    else
      @emails = Email.where("emails.to = ?", current_user.gollygmail)
      .order(created_at: :desc)
    end

  end

  def create
    debugger
    email = Email.new(email_params)
    email.from_name = current_user.first_name + ' ' + current_user.last_name
    email.from_email = current_user.gollygmail
    if User.find_by(gollygmail: email.to)
      email.save
      render json: email
    else
      render json: { message: "No such user" }
    end
  end

  def update
    email = Email.find_by(id: params[:id])
    if email.update(email_params)
      render json: email
    else
      render json: { message: "Couldn't update"}
    end
  end

  private
  def email_params
    params.require(:email).permit(:subject, :body, :to, :image, :marked, :starred, :important, :read, :page)
  end

end
