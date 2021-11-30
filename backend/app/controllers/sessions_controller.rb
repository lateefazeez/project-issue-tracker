class SessionsController < ApplicationController
include UserConcern

  def create
    # Check if user is authenticated
    if @user = User.authenticate_with_credentials(params[:email], params[:password])
      # save the user id inside the browser cookie. This is how we keep the user 
      # logged in when they navigate around our website.
      session[:user_id] = @user.id
      render json: @user
    else
      # if user's login doesn't work, send them back to the login form
      render json: { status: 401}
    end
  end

  def logout
    reset_session
    render json: { status: 200, logged_out: true }
  end

  def logged_in 
    if @current_user
      render json: {
        user: @current_user,
        logged_in: true
      }
    end
  end

end
