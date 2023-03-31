class SessionsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :user_not_found
  rescue_from CustomExceptions::AuthenticationError, with: :invalid_password

  def authenticate
    user = User.find_by(email: params[:email])
  
    if user.nil?
      user_not_found
    elsif user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: { message: "Logged in successfully" }, status: :ok
      return
    else
      invalid_password
    end
  rescue ActiveRecord::RecordNotFound => e
    user_not_found
  rescue CustomExceptions::AuthenticationError => e
    invalid_password
  rescue => e
    render json: { error: "Login failed" }, status: :bad_request
  end
  

  def destroy
    session[:user_id] = nil
    head :no_content
  end

  private

  def user_not_found
    render json: { errors: "Account not found for that email address" }, status: :not_found
  end

  def invalid_password
    render json: { errors: "Incorrect email or password" }, status: :unauthorized
  end
end
