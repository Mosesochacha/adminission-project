Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :forms
  resources :courses
  resources :teachers, only:[:index , :show , :create , :update , :destroy], param: :id
  resources :students, only: [:index, :create, :update], param: :id
  resources :admissions, only: %i[index update create]
  # Routes for users
  post '/login', to: "sessions#authenticate"
  delete '/logout', to: "sessions#destroy"
  post '/register' , to: "users#create"

end

