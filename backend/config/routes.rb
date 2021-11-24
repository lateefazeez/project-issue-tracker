Rails.application.routes.draw do
  get 'projects/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'projects#index'

  resources :projects
  resources :tickets
  resources :tasks
  resources :comments
  resources :users_tickets, only: [:index, :show]
end
