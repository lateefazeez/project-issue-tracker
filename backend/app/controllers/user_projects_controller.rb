class UserProjectsController < ApplicationController
 

  def index
    userprojects= UserProject.all
    render json: userprojects
  end

  def show
    @user_project = UserProject.find(params[:id])

    render json: @user_project
  end

  
  def destroy
    @userprojects = UserProject.find(params[:id])

    if @userprojects.destroy
      head :no_content
    else
      render json: {error: @userprojects.errors.messages}, status: 422
    end
  end


  def create
    @userprojects = UserProject.new(userprojects_params)

    if @userprojects.save
      render json: @userprojects, status: :created
    else
      render json: {error: @userprojects.errors.messages}, status: 422
    end
  end

  private

  def userprojects_params
    params.require(:user_project).permit(:users_id, :projects_id)
  end

end
