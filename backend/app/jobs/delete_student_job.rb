class DeleteStudentJob < ApplicationJob
  queue_as :default

  def perform(student_id)
    begin
      student = Student.find(student_id)

      # Check if there is a declined admission associated with this student
      if student.admissions.declined.any?
        student.destroy!
      end
      
    rescue ActiveRecord::RecordNotFound => e
      Rails.logger.error "Error deleting student: #{e.message}"
    end
  end
end
