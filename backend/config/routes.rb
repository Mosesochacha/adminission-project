Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :forms
  resources :courses
  resources :teachers, only:[:index , :show , :create, :update, :destroy], param: :id
  resources :students, only: [:index, :create, :update, :destroy], param: :id
  resources :admissions, only: %i[index update create]
  # Routes for users
  post '/login', to: "sessions#authenticate"
  delete '/logout', to: "sessions#destroy"
  post '/register' , to: "users#create"
  get  'users' , to: "users#index"
  delete 'students', to: 'students#destroy'
  post '/reset_password', to: 'password_resets#create'
  get '/reset_password/:token/edit', to: 'password_resets#edit', as: :edit_password_reset
  patch 'reset_password', to: 'password_resets#update'


end
