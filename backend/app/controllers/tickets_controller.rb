class TicketsController < ApplicationController


  def index
    @tickets = Ticket.all
    render json: @tickets
  end

  def create
    ticket = Ticket.new(ticket_params)
    users = User.all
    userTickets = UserTicket.all

    if ticket.save
      # params[:id].each do |id|
      #   UserProject.create!(users_id: id, projects_id: @project.id)
      # end
      render json: { 
        ticket: ticket, 
        users: users,
        userTickets: userTickets,
        status: :created }
    else
      render json: {error: ticket.errors.messages}, status: 422
    end

  end

  def show
    @ticket = Ticket.find params[:id]
    render json: @ticket
  end

  def update
    @ticket = Ticket.find(params[:id])
  
    if @ticket.update(ticket_params)
      render json: @ticket
    else
      render json: {error: @ticket.errors.messages}, status: 422
    end
  end


  def destroy
    @ticket = Ticket.find(params[:id])

    if @ticket.destroy
      head :no_content
    else
      render json: {error: @ticket.errors.messages}, status: 422
    end
  end


end



private

def ticket_params
  params.require(:ticket).permit(
    :title,
    :description,
    :start_date,
    :end_date,
    :percentage_complete,
    :status,
    :users_id,
    :projects_id,
    :plan_duration,
    :priority,
    :category
  )
end
