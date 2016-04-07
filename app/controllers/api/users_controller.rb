class Api::UsersController < ApplicationController
  before_filter :require_no_current_user!, :only => [:new, :create]

  def new
    @user = User.new
  end

  def create
    user = User.new(
      first_name: user_params[:first_name],
      last_name: user_params[:last_name],
      username: user_params[:username],
      password: user_params[:password],
      gender: user_params[:gender],
    )
    user.birthday = Date.new(
      user_params[:birthday_year].to_i,
      user_params[:birthday_month].to_i,
      user_params[:birthday_day].to_i
    )
    user.gollygmail = user.username + '@gollygmail.com'
    if user.save
      login!(user)
      render json: user
    else
      render json: { message: "shouldn't be here" }
    end
  end

  def update
    user = currentUser
    if user.update(user_params)
      render json: user
    else
      render json: { message: "couldn't update" }
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
    params.require(:user).permit(:first_name, :last_name, :birthday_day, :birthday_month,
    :birthday_year, :username, :gollygmail, :password, :gender)
  end
end
