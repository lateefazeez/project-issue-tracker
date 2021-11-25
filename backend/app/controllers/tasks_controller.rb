class TasksController < ApplicationController
  def index #/get
    @tasks = Task.all
    render json:@tasks
  end

  def show
    task = Task.find(params[:id])
    render json: task
  end
  
  def create #/post id
  end
  
  def destroy #/delete id
  end

  def update
    task = Task.find(params[:id])

    if task.update(task_params)
      render json: task
    else
      render json: {error: task.errors.messages}, status: 422
    end
  end

  private
  def task_params
    params.require(:task).permit(:title, :complete?, :tickets_id)
  end

end
