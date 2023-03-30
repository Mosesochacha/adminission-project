class StudentsController < ApplicationController
  def create
    @student = Student.new(student_params)

    if @student.save
      Admission.create(
        admission_date: Date.today,
        student_id: @student.id,
        form_id: params[:form_id],
        status: "waiting"
      )
      NewAdmissionMailer
        .with(student: @student)
        .waiting_email(@student) # Provide student argument here
        .deliver_now
      render json: @student, status: :created
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  private

  def student_params
    params.require(:student).permit(
      :first_name,
      :last_name,
      :gender,
      :date_of_birth,
      :admission_year,
      :email,
    )
  end
end
