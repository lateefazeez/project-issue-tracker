class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
  end
end

def user_params
  params.require(:user).permit(tickets_id: [])
end
