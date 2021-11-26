class UserProjectsController < ApplicationController

  def index
    userprojects= UserProject.all
    render json: userprojects
  end

  def show
    @user_project = UserProject.find(params[:id])

    render json: @user_project
  end

  # def create
  #   for @users in user_project_params.users_id do |user|
  #     @user_project = UserProject.new(user)

  #     if @user_project.save
  #       render json: @user_project, status: :created
  #     else
  #       render json: {error: @user_project.errors.messages}, status: 422
  #     end
  #   end
  #   puts user_project_params
   
  # end
  def create
    @user_project = UserProject.new(user_project_params)

    if @user_project.save
      params[:users_id].each do |id|
        UserProject.create!(users_id: id, projects_id: projects_id)
      end
      render json: @user_project, status: :created
    else
      render json: {error: @user_project.errors.messages}, status: 422
    end
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
