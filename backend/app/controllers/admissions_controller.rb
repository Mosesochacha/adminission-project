class AdmissionsController < ApplicationController

  def index
    admissions = Admission.includes(:student).order(created_at: :desc)
    render json: admissions.as_json(include: { student: { only: [:name, :class] }})
  end
  
  
  def update
    @admission = Admission.find(params[:id])
    @admission.update(admission_params)

    if @admission.status == 'accepted'
      AdmissionMailer.with(student: @admission.student).acceptance_email.deliver_now
    elsif @admission.status == 'declined'
      AdmissionMailer.with(student: @admission.student).declined_email.deliver_now
    end

    render json: { message: 'Admission updated successfully' }, status: :ok
  end
  
  def create
    
  end

  private

  def admission_params
    params.require(:admission).permit(:admission_date, :admission_number, :student_id, :form_id, :form, :status)
  end
end
