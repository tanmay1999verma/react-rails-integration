Rails.application.routes.draw do
  resources :posts

  namespace :api do
    namespace :v1 do
      resources :posts
    end
  end
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
