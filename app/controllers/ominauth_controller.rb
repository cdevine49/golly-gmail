class OmniauthController < ApplicationController

  def facebook
    user = User.update_with_auth_hash(auth_hash)
    # log_in!(user) if user
    redirect_to root_url
  end

  private
  def auth_hash
    request.env['omniauth.auth']
  end

end
