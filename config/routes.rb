Rails.application.routes.draw do
  resources :scenes
  resources :states
  resources :stories, only: :show
  # resources :equipment_slots
  # resources :equipment
  # resources :spell_slots
  # resources :spells
  resources :enemies, only: [:index, :show]
  resources :characters, only: %i[index show create destroy]
  # resources :users

  get "/character_modifiers/:id", to: "characters#show_modifiers"
  get "/enemy_modifiers/:id", to: "enemies#show_modifiers"

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
 
  
end
