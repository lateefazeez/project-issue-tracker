class TicketsController < ApplicationController
  def index
    @tickets = Ticket.all
    render json: @tickets
  end

  def show
    @ticket = Ticket.find params[:id]
    render json: @ticket
  end
end

private

def ticket_params
  params.require(:ticket).permit(users_id: [])
end
