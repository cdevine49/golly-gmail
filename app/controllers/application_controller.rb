class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
	helper_method :current_user, :current_user_name, :current_user_id, :logged_in?

	private
	def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

	def logged_in?
		!!current_user
	end

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

	def logout!
		current_user.try(:reset_session_token!)
		session[:session_token] = nil
	end



  def current_user_id
    current_user.id if current_user
  end

  def current_user_name
    current_user.username if current_user
  end

  # before actions

  def require_current_user!
    render json: { message: "You must be logged in" } unless current_user
  end

  def require_no_current_user!
    render json: { message: "Can't create account while logged in" } if current_user
  end

	def require_logged_in!
	   unless logged_in?
       	render text: "You are not logged in", status: 401
      end
	end

  def require_logged_out!
    render json: { message: "You are logged in" } if logged_in?
  end
end
