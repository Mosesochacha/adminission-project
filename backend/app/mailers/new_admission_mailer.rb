class NewAdmissionMailer < ApplicationMailer
  default from: 'shinobichool@gmail.com'

  def waiting_email(student)
    @student = student
    mail(to: @student.email, subject: 'Under Approval')
  end

  def acceptance_email(student)
    @student = student
    mail(to: @student.email, subject: 'Your admission has been accepted')
  end

  def declined_email(student)
    @student = student
    mail(to: @student.email, subject: 'Your admission has been declined')
  end
end
