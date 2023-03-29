Rails.application.routes.draw do
  resources :courses
  resources :teachers
  resources :admissions
  resources :classes
  resources :students
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/login', to: "sessions#login"
  delete '/logout', to: "sessions#destroy"
end
