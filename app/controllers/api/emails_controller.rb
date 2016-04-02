class Api::EmailsController < ApplicationController
  def index
    @emails = Email.where(to: current_user.username + "@gollygmail.com").order(created_at: :desc)
  end

  def create
    email = Email.new(email_params)
    email.from = current_user.username + '@gollygmail.com'
    if User.find_by(username: email.to.split('@')[0])
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
