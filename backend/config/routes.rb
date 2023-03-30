Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :forms
  resources :courses
  resources :students, only: [:index, :create, :update], param: :id
  resources :admissions, only: %i[index update create]
  # Routes for users
  post '/login', to: "sessions#authenticate"
  delete '/logout', to: "sessions#destroy"
  post '/register' , to: "users#create"

  #Routes For Teachers
  get  "/teacher", to: "teachers#index"
end
