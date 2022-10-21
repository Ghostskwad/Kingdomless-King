class StoriesController < ApplicationController

    def show
        @story = Story.find(params[:id])
        render json: @story, status: :ok
    end
end
