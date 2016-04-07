class Api::SearchesController < ApplicationController

  def index
    @search_results = Email
      .search_emails(params[:query])
      .where("emails.to = ? or emails.from_email = ?", current_user.gollygmail, current_user.gollygmail)
      .page(1).per(6)
  end
end
