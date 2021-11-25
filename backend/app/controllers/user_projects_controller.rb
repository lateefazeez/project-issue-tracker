class UserProjectsController < ApplicationController

  def index
    userprojects= UserProject.all
    render json: userprojects
  end

end
