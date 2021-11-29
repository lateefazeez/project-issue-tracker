class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  # get current user or use the existing current user
  # def set_current_user
  #   @current_user ||= User.find(session[:user_id]) if session[:user_id]
  # end
  # helper_method :current_user

  # redirect the user to login page if not logged in yet
  # def authorize
  #   redirect_to :signup unless current_user
  # end

  # def jwt_key
  #   Rails.application.credentials.jwt_key
  # end
  # included do
  #   befor_action :set_current_user
  # end

  def set_current_user
    if session[:user_id]
      @current_user = User.find(session[:user_id])
    end
  end
  helper_method :current_user


end
