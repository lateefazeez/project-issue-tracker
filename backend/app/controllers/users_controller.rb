class UsersController < ApplicationController
  def index
    @users = User.all
  end

  def show
  end
end

def user_params
  params.require(:user).permit(tickets_id: [])
end
