class Api::MailboxesController < ApplicationController
  def index
    @mailboxes = Mailbox.all
  end

  def create
    @mailbox = Mailbox.new(mailbox_params)
    Mailbox.save
    render json: {}
  end

  private
  def mailbox_params
    params.require(:mailbox).permit(:subject, :body, :to)
  end

end
