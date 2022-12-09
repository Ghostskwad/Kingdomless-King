class CharactersController < ApplicationController
    before_action :set_character, only: %i[show show_modifiers]
    
    def show
        render json: @character
    end

    def show_modifiers
        render json: @character, serializer: ModifierSerializer, status: :ok
    end

    private 

    def set_character
        @character = Character.find(params[:id])
    end

    def character_params
        params.permit(:name, :pronoun)
    end
end
