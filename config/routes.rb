Rails.application.routes.draw do
  resources :saves
  # resources :equipment_slots
  # resources :equipment
  # resources :spell_slots
  # resources :spells
  resources :enemies, only: [:index]
  resources :characters, only: %i[index show create destroy]
  # resources :users

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
 
  
end
