class UsersTicketsController < ApplicationController

  def index
    @usertickets = UserTicket.all
    render json: @usertickets
  end

  def show
    usertickets = UserTicket.where(tickets_id: params[:id])
    users = usertickets.map { |tick_obj| User.find(tick_obj.users_id) }
    render json: users
  end

  def destroy
    @usertickets = UserTicket.find(params[:id])

    if @usertickets.destroy
      head :no_content
    else
      render json: {error: @usertickets.errors.messages}, status: 422
    end
  end

  def create
    @usertickets = UserTicket.new(usertickets_params)

    if @usertickets.save
      render json: @usertickets, status: :created
    else
      render json: {error: @usertickets.errors.messages}, status: 422
    end
  end
  
    private
  def usertickets_params
    params.require(:users_ticket).permit(:users_id, :tickets_id, :projects_id)
  end

end
