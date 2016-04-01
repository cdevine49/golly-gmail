class Api::EmailsController < ApplicationController
  def index
    @emails = Email.all
  end

  def create
    email = Email.new(email_params)
    email.from = 1 #change to currentuser.id when that is set up
    email.save
    render json: email
  end

  private
  def email_params
    params.require(:email).permit(:subject, :body, :to, :mailbox_id)
  end

end
