class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  def create
    begin
      user = User.new(user_params)
      user.password = params[:password]
      user.password_confirmation = params[:password_confirmation]
      user.save!
  
      session[:user_id] = user.id
      render json: { status: :created, message: "User successfully registered", user: user }
    rescue ActiveRecord::RecordInvalid => e
      render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    rescue ActiveRecord::RecordNotUnique => e
      render json: { errors: [e.message] }, status: :unprocessable_entity
    end
  end
  
  

  def show
    user = User.find(session[:user_id])
    render json: user
  end

  private

  def user_params
    params.require(:user).permit(:username, :role, :email, :password, :password_confirmation)
  end
  

  def record_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def not_found
    render json: { error: "User Not Found" }, status: :unauthorized
  end
end
