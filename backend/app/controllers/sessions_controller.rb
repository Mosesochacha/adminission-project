class SessionsController < ApplicationController
  def authenticate
    user = User.find_by(email: params[:email])
    if user.nil?
      render json: { errors: "User not found" }, status: 404
      return
    end

    if user.authenticated?(params[:password])
      session[:user_id] = user.id
      render json: { message: "Logged in successfully" }
    else
      render json: { errors: "Invalid password" }, status: 401
    end
  rescue => e
    render json: { errors: e.message }, status: :unprocessable_entity
  end

  def destroy
    session[:user_id] = nil
    render json: { message: "Logged out successfully" }
  rescue => e
    render json: { errors: e.message }, status: :unprocessable_entity
  end

  # def create
  #   user = User.create(user_params)
  #   if user.save
  #     session[:user_id] = user.id
  #     render json: user
  #   else
  #     render json: { error: user.errors.full_messages }, status: :unprocessable_entity
  #   end
  # rescue ActiveRecord::RecordNotUnique => e
  #   render json: { error: "Email address already registered" }, status: :unprocessable_entity
  # rescue ActiveRecord::RecordInvalid => e
  #   render json: { error: e.record.errors.full_messages.join(", ") }, status: :unprocessable_entity
  # rescue => e
  #   render json: { error:user.error.full_messages  }, status: :unprocessable_entity
  # end

  # private

  # def user_params
  #   params.require(:user).permit(:username, :email, :password, :password_confirmation)
  # end 
end
