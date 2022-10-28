class ScenesController < ApplicationController

    def index
        render json: Scene.all, status: :ok
    end

    def show
        scene = Scene.find(params[:id])
        render json: scene, status: :ok
    end
end
