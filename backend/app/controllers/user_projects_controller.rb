class UserProjectsController < ApplicationController
 

  def index
    userprojects= UserProject.all
    render json: userprojects
  end

  def show
    @user_project = UserProject.find(params[:id])

    render json: @user_project
  end

  def create
    @userprojects = UserProject.new(user_project_params)

    if @userprojects.save
        users = User.where(id: params[:users_id])
        users.each do |user|
          @project.users << user
        end
      render json: @userprojects, status: :created
    else
      render json: {error: @userprojects.errors.messages}, status: 422
    end
  end
  

  private

  def user_project_params
    params.require(:user_project).permit(:users_id, :projects_id)
  end

end
