Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :new, :create]
    resources :emails, only: [:index, :new, :create, :update]
    resources :mailboxes, only: [:index, :create]
    resource :session, only: [:show, :create, :destroy]
    resources :searches, only: [:index]
  end
end
