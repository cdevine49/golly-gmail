class OmniauthController < ApplicationController

  def facebook
    if current_user  && !User.exists?(uid: auth_hash[:uid])
      current_user.update(provider: auth_hash[:provider], uid: auth_hash[:uid])
    else
      user = User.find_by_auth_hash(auth_hash)
      login!(user) if user == current_user
    end
    redirect_to root_url = '#'
  end

  private
  def auth_hash
    request.env['omniauth.auth']
  end

end
