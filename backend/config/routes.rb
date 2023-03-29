Rails.application.routes.draw do

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  resources :students
  resources :teachers
  resources :forms
  resources :courses
  # Routes for users
  post '/login', to: "sessions#authenticate"
  delete '/logout', to: "sessions#destroy"
  post '/register' , to: "users#create"

  #Routes For Teachers
  get  "/teacher", to: "teachers#index"
end
