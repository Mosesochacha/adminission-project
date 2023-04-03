class PasswordResetsController < ApplicationController

  def create
    begin
      user = User.find_by(email: params[:email])
      if user.present?
        # generate a verification code as a random number with 7 digits
        verification_code = rand(1000000...9999999)
        # set the verification code and expiry time in the user's record
        user.update(reset_password_token: verification_code, reset_password_sent_at: Time.now)
  
        # send the verification code to the user's email
        UserMailer.with(user: user).reset_password_email(user).deliver_now
  
        render json: { success_message: "A verification code has been sent to your email address." }
      else
        render json: { error_message: "No user found with this email address." }
      end
    rescue ActiveRecord::RecordNotFound
      render json: { error_message: "User not found." }
    rescue StandardError => e
      # log the error and return a generic error message
      Rails.logger.error("Error in create method: #{e.message}")
      render json: { error_message: "An error occurred. Please try again later." }
    end
  end
  

  def edit
    user = User.find_by(reset_password_token: params[:token])

    if user.present? && user.reset_password_sent_at > 3.hours.ago
      # this means the verification code is correct and has not expired
      render json: { valid_token: true }
    else
      render json: { valid_token: false }
    end
  end

  def update
    user = User.find_by(reset_password_token: params[:token])

    if user.present? && user.reset_password_sent_at > 3.hours.ago
      # this means the verification code is correct and has not expired
      user.update(password: params[:password], reset_password_token: nil)

      render json: { success_message: "Your password has been updated." }
    else
      render json: { error_message: "Invalid or expired verification code." }
    end
  end
end
