class StudentsController < ApplicationController


  def index
    students = Student.includes(:admissions).order(created_at: :desc)
    render json: students.as_json(include: :admissions)
  end
  
  def create
    @student = Student.new(student_params)
    @admission = @student.admissions.build(admission_date: params[:admission_date], admission_number: params[:admission_number], status: params[:status] || 'waiting', course_id: params[:course_id])
    
    if @student.save && @admission.save
      NewAdmissionMailer.with(student: @student).waiting_email(@student).deliver_now
      render json: { student: @student, admission: @admission }, status: :created
    else
      render json: { errors: [@student.errors.full_messages, @admission.errors.full_messages] }, status: :unprocessable_entity 
    end
  end

  def update
    @admission = Admission.find(params[:id])
    @student = @admission.student # add this line
    @admission.update(
      admission_date: params[:admission_date], 
      admission_number: params[:admission_number], 
      status: params[:status], 
      form: params[:form],
      course_id: params[:course_id], 
      student_id: @student.id
      
    )
   
    if @admission.status == 'accepted'
      NewAdmissionMailer.with(student: @student).acceptance_email(@student).deliver_now
    elsif @admission.status == 'declined'
      NewAdmissionMailer.with(student: @student).declined_email(@student).deliver_now

      # Schedule deletion of student along with associated records after specified hours
      #  admission.delay.delete_student_after_one_hour
      
      # Schedule deletion of student along with associated records after specified seconds
      @admission.delete_student_after_three_seconds
    end
    
    render json: { admission: @admission }, status: :ok
  end

  def destroy
    @student = Student.find(params[:id])
    @student.destroy
    redirect_to delete_student_path(@student), notice: "Student successfully deleted."
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
      :form
    )
  end
end
