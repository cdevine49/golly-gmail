class Api::EmailsController < ApplicationController
  def index
    @emails = params[:mailbox] = 1 ? Email.all : Email.where(mailbox_id: params[:mailbox_id])
  end

  def create
    @email = Email.new(email_params)
    @email.from = 1 #change to currentuser.id when that is set up
    Email.save
    render json: @email
  end

  private
  def email_params
    params.require(:email).permit(:subject, :body, :to, :mailbox_id)
  end

end
