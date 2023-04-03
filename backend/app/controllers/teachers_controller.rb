class TeachersController < ApplicationController


  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  # GET /teachers with assoctiated forms with there courses
 def index
   teachers = Teacher.includes(:forms)
   teachers_data = teachers.map do |teacher|
     {
       id: teacher.id,
       first_name: teacher.first_name,
       last_name: teacher.last_name,
       email: teacher.email,
       phone_number: teacher.phone_number,
       forms: teacher.forms,
       courses: Course.joins(forms: :teacher).where(forms: { teacher_id: teacher.id })
     }
   end
   render json: teachers_data
 end
 

  # GET /teachers/:id
  def show
    render json: {
      id: @teacher.id,
      first_name: @teacher.first_name,
      last_name: @teacher.last_name,
      email: @teacher.email,
      phone_number: @teacher.phone_number,
      forms: @teacher.forms,
      courses: Course.joins(forms: :teacher).where(forms: { teacher_id: @teacher.id })
    }
  end

# POST /teachers
def create
  @teacher = Teacher.new(teacher_params)
  @courses = params[:courses] || []

  if @teacher.save
    # Add courses to the teacher
    @courses.each do |course_id|
      form = Form.create(course_id: course_id, teacher_id: @teacher.id)
      @teacher.forms << form
    end

    render json: @teacher, status: :created, location: @teacher
  else
    render json: @teacher.errors, status: :unprocessable_entity
  end
end

# PATCH/PUT /teachers/1
def update
  @courses = params[:courses] || []

  # Update teacher details
  if @teacher.update(teacher_params)

    # Remove existing courses for the teacher
    @teacher.forms.destroy_all

    # Add new courses for the teacher
    @courses.each do |course_id|
      form = Form.create(course_id: course_id, teacher_id: @teacher.id)
      @teacher.forms << form
    end

    render json: @teacher
  else
    render json: @teacher.errors, status: :unprocessable_entity
  end
end

# DELETE /teachers/1
def destroy
  @teacher.destroy
  head :no_content
end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_teacher
    @teacher = Teacher.find(params[:id])
  end

  # Only allow a list of trusted parameters through.
  def teacher_params
    params.require(:teacher).permit(:first_name, :last_name, :email, :phone_number)
  end

  # Handle ActiveRecord::RecordNotFound error
  def record_not_found
    render json: { error: 'Record not found' }, status: :not_found
  end
end
