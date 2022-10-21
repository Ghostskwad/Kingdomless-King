class EnemiesController < ApplicationController
before_action :set_enemy, only: %i[show show_modifiers]

    def index
        render json: Enemy.all, status: :ok
    end

    def show
        render json: @enemy
    end

    def show_modifiers
        render json: @enemy, serializer: ModifierSerializer, status: :ok
    end

private 

    def set_enemy
        @enemy = Enemy.find(params[:id])
    end

end
