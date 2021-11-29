Rails.application.routes.draw do
  get 'projects/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'projects#index'

  # Routes for Google authentication
  get "/login", to: redirect("/auth/google_oauth2")
  # get "/logout", to: "sessions#destroy"
  get "/navigation", to: "dashboard#index"
  get "/auth/google_oauth2/callback", to: "sessions#googleAuth"
  get 'auth/failure', to: redirect('/')
  post '/sessions', to: "sessions#create"
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"


  post '/registrations', to: "registrations#create"
  # resource :sessions, only: [:create, :destroy, :googleAuth]

  # namespace :api do
    resources :projects, only: [:index, :show, :create, :update, :destroy]
    resources :tickets, only: [:index, :create, :update, :show, :destroy]
    resources :tasks
    resources :comments
    resources :users_tickets, only: [:index, :show, :create, :destroy]
    resources :users
    resources :user_projects, only: [:index, :show, :create, :update, :destroy]
end
