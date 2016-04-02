class Api::EmailsController < ApplicationController
  def index
    # debugger
    @emails = Email.where(to: current_user.username).order(updated_at: :desc)
  end

  def create
    email = Email.new(email_params)
    email.from = current_user.username + '@gollygmail.com'
    if User.find_by(username: email.to)
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
