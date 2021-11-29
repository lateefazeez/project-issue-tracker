class RegistrationsController < ApplicationController
  def create 
    @user = User.new(registrations_params)
    
    if @user.save!
      session[:user_id] = @user.id 
      render json: {
        status: :created,
        user: @user
      }
    else 
      render json: {
        status: "error occured"
      }
    end
  end

  def registrations_params
    params.permit(
      :first_name, 
      :last_name, 
      :email, 
      :password
    )
  end

end
