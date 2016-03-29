class SessionsController < ApplicationController
  before_action :require_signed_out!, only: [:new, :create]
  before_action :require_signed_in!, only: [:destroy]

  def new
    render :new
  end

  def create
    @user = User.find_by_credentials(
      params[:username],
      params[:password]
    )

    if @user
      login!(@user)
      redirect_to 
    else
      flash.now[:errors] = ["Invalid username or password."]
      render :new
    end
  end

  def destroy
    logout!
    redirect_to new_session_url
  end
end
