class EnemiesController < ApplicationController

    def index
        render json: Enemy.all, status: :ok
    end
end
