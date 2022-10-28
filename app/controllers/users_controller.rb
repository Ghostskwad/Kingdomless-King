class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

    def show
        render json: @current_user
    end

    def create 
        user = User.create!(user_params)
        State.create(
            user_id: user.id, 
            character_id: 1, 
            boss1_type: "Enemy", 
            boss1_id: 1, 
            boss2_type: "Enemy", 
            boss2_id: 2)
        session[:user_id] = user.id 
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
