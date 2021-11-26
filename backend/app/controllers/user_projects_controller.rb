class UserProjectsController < ApplicationController
 

  def index
    userprojects= UserProject.all
    render json: userprojects
  end

  def show
    @user_project = UserProject.find(params[:id])

    render json: @user_project
  end


  def update 
  end

  private

  def user_project_params
    params.require(:user_project).permit(
      :users_id,
      :projects_id
    )
  end

end
