class TasksController < ApplicationController
  def index #/get
    @tasks = Task.all
    render json:@tasks
  end

  def show #task/ticket_id/id
    @task = Task.where(tickets_id: params[:id])
    render json: @task
  end

  def create #/post id
  end
  
  def destroy #/delete id
  end

end

private
def task_params
  params.require(:task).permit(:title, :complete?, :tickets_id)
end
