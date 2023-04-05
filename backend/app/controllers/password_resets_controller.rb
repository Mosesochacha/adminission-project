class PasswordResetsController < ApplicationController
  def create
    user = User.find_by(email: params[:email])
    if user.present?
      verification_code = rand(100000..999999)
      user.update(reset_password_token: verification_code, reset_password_sent_at: Time.now)

      UserMailer.reset_password_email(user).deliver_now
      render json: { message: "A verification code has been sent to your email address." }, status: :created
    else
      render json: { errors: "No user found with this email address." }, status: :unprocessable_entity
    end
  end

  def edit
    user = User.find_by(reset_password_token: params[:token])
    if user.present? && user.reset_password_sent_at > 3.hours.ago
      session[:token] = params[:token]
      render json: { valid_token: true }
    else
      render json: { valid_token: false }
    end
  end

  def update
    user = User.find_by(reset_password_token: session[:token])
  
    if user.present? && user.reset_password_sent_at > 3.hours.ago
      user.update(password_params)
      session[:token] = nil
      render json: { message: "Your password has been updated." }
    else
      render json: { errors: "Invalid or expired verification code." }, status: :unprocessable_entity
    end
  end
  

  private

  def password_params
    params.permit(:password, :password_confirmation).merge(reset_password_token: nil)
  end
end
