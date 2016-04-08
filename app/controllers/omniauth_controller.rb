class OmniauthController < ApplicationController

  def facebook
    if current_user  && !User.exists?(uid: auth_hash[:uid]) #If logged in trying to connect
      current_user.update(provider: auth_hash[:provider], uid: auth_hash[:uid])
    elsif !current_user #if not logged in
      user = User.find_by_auth_hash(auth_hash)
      login!(user) if user
    end
    redirect_to root_url = '#'
  end

  private
  def auth_hash
    request.env['omniauth.auth']
  end

end
