class Api::UsersController < ApplicationController
  before_filter :require_no_current_user!, :only => [:new, :create]

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :root
    else

    end
  end

  # def index
  #   if params[:username]
  #     redirect_to '/#password'
  #   else
  #     redirect_to '/#identifier'
  #   end
  # end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
