Rails.application.routes.draw do
  root to: "static_pages#root"
  get "auth/facebook/callback", to: "omniauth#facebook"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :new, :create]
    resources :emails, only: [:index, :show, :new, :create, :update]
    resource :session, only: [:show, :create, :destroy]
    resources :searches, only: [:index]
  end
end
