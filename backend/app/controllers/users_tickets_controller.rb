class UsersTicketsController < ApplicationController

  # def index
  #   @usertickets = UserTicket.all
  #   render json: @usertickets
  # end

  def show
    usertickets = UserTicket.where(tickets_id: params[:id])
    users = usertickets.map { |tick_obj| User.find(tick_obj.users_id) }
    render json: users
  end

end
