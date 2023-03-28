class SessionsController < ApplicationController
  def login
    begin
      user = User.find_by(email: params[:email])
      if user.nil?
        render json: { errors: "User not found" }, status: 404
      else
        if user.authenticated?(params[:password])
          session[:user_id] = user.id
          render json: { message: "Logged in successfully" }
        else
          render json: { errors: "Invalid password" }, status: 401
        end
      end
    rescue => e
      render json: { errors: e.message }, status: :unprocessable_entity
    end
  end

  def destroy
    session[:user_id] = nil
    render json: { message: "Logged out successfully" }
  rescue => e
    render json: { errors: e.message }, status: :unprocessable_entity
  end
end
