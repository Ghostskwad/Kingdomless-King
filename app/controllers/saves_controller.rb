class SavesController < ApplicationController

    def index 
        render json: Save.all
    end
end
