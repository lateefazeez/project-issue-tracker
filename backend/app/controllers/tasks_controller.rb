class TasksController < ApplicationController
  def index #/get
    @tasks = Task.all
    render json:@tasks
  end

  def show #task/ticket_id/id
    @task = Task.where(tickets_id: params[:id])
    render json: @task
  end
  
  def create
    @task = Task.new(task_params)

    if @task.save
      render json: @task, status: :created
    else
      render json: {error: @task.errors.messages}, status: 422
    end

  end

  def update
    task = Task.find(params[:id])

    if task.update(task_params)
      render json: task
    else
      render json: {error: task.errors.messages}, status: 422
    end
  end
  
  def destroy 
    @task = Task.find(params[:id])

    if @task.destroy
      head :no_content
    else
      render json: {error: @task.errors.messages}, status: 422
    end
  end

end

private
def task_params
  params.require(:task).permit(:title, :complete?, :tickets_id)
end
