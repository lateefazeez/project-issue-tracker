class ProjectsController < ApplicationController

  def index
    @projects = Project.order(id: :desc).all
    render json: @projects
  end

  def show
    @project = Project.find(params[:id])

    render json: @project
  end

  def create
    @project = Project.new(project_params)

    if @project.save
      users = User.where(id: params[:team])
      users.each do |user|
        @project.users << user
      end
      @user_projects = UserProject.where(["projects_id = ?", @project.id])
      puts @user_projects
      render json: { 
        project: @project, 
        user_projects: @user_projects, 
        status: :created }
    else
      render json: {error: @project.errors.messages}, status: 422
    end
  end

  def update
    @project = Project.find(params[:id])

    if @project.update(project_params)
      render json: @project
    else
      render json: {error: @project.errors.messages}, status: 422
    end
  end

  def destroy
    @project = Project.find(params[:id])
    if @project.destroy
      head :no_content
    else
      render json: {error: @project.errors.messages}, status: 422
    end
  end

  private

  def project_params
    params.require(:project).permit(
      :title,
      :description,
      :start_date,
      :end_date,
      :percentage_complete,
      :status,
      :users_id
    )
  end

end
