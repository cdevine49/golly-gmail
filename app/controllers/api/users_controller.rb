class Api::UsersController < ApplicationController
  before_filter :require_no_current_user!, :only => [:new, :create]

  def new
    @user = User.new
  end

  def create
    user = User.new(
      first_name: user_params[:firstName],
      last_name: user_params[:lastName],
      username: user_params[:username],
      password: user_params[:password],
      gender: user_params[:gender],
    )
    user.birthday = Date.new(
      user_params[:birthdayYear].to_i,
      user_params[:birthdayMonth].to_i,
      user_params[:birthdayDay].to_i
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


  def index
    @users = User.all
  end

  private

  def user_params
    params.require(:user).permit(:firstName, :lastName, :birthdayDay, :birthdayMonth,
    :birthdayYear, :username, :gollygmail, :password, :gender, :provider, :uid)
  end
end
