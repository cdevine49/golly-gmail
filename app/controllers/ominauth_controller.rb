class OmniauthController < ApplicationController

  def facebook
    user = User.find_or_create_by_auth_hash(auth_hash)
    log_in!(user) if user
    redirect_to root_url + "#/posts"
  end

  private
  def auth_hash
    request.env['omniauth.auth']
  end

end
