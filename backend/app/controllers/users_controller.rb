class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    if request.format.html?
      redirect_to '/login'
    else
      render json: user, status: :created
    end
  end

  def update
    user = User.find_by(id: session[:user_id])
    if user.nil?
      not_found
    elsif user.update(user_params)
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user.nil?
      not_found
    else
      render json: user
    end
  end

  private

  def user_params
    params.permit(:username, :email, :password, :password_confirmation)
  end

  def record_invalid(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def not_found
    render json: { error: "User Not Found" }, status: :not_found
  end
end
