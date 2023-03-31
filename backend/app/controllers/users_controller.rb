class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  def create
    user = User.create!(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: users.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    user = User.find(session[:user_id])
    render json: user
  end

  private

  def user_params
    params.permit(:username, :email, :password, :password_confirmation)
  end

  def record_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def not_found
    render json: { error: "User Not Found" }, status: :unauthorized
  end
end
