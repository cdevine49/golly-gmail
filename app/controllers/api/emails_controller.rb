class Api::EmailsController < ApplicationController
  def index
    @emails = Email.where(to: current_user.gollygmail).order(created_at: :desc)
  end

  def create
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

  private
  def email_params
    params.require(:email).permit(:subject, :body, :to, :mailbox_id)
  end

end
