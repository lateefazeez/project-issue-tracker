class UsersController < ApplicationController
  def index
    @users = User.all
    render json: @users
  end

  def show
    if !current_user
      session[:signup_url] = request.url
    end
  end

  def create
    @user = User.new(user_params)
  
    if @user.save
      session[:user_id] = @user.id
      render json: @user
      # redirect_to :root
    else
      flash[:error] = 'An error occured!'
      redirect_to "/signup"
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :first_name, 
      :last_name, 
      :email, 
      :password, 
      :password_confirmation
    )
  end


end



# def user_params
#   params.require(:user).permit(tickets_id: [])
# end
