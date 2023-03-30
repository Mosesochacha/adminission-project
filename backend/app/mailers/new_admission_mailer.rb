class NewAdmissionMailer < ApplicationMailer
  default from: 'your_email@example.com'

  def waiting_email(student)
    @student = student
    mail(to: @student.email, subject: 'Your admission is waiting for approval')
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