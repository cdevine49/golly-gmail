class Api::SearchesController < ApplicationController

  def index
    @search_results = Email
      .search_emails(params[:query])
      .page(1).per(6)
  end
end
