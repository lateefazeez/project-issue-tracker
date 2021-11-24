Rails.application.routes.draw do
  get 'projects/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'projects#index'

  # namespace :api do
    resources :projects, only: [:index, :show, :create, :update, :destroy]
    resources :tickets, only: [:index, :create]
    resources :tasks
    resources :comments
    resources :users_tickets, only: [:index, :show]
    resources :users
end
