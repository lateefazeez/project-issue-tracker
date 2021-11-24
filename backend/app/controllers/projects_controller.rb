class ProjectsController < ApplicationController
  def index
    @projects = Project.all
    render json: @projects
  end

  def new 
    
  end
end
