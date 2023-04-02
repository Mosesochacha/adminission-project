class UserMailer < ApplicationMailer
  def reset_password_email(user)
    @user = user
    mail(to: user.email, subject: 'Reset your password')
  end
end
