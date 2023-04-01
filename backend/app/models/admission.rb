class Admission < ApplicationRecord
  belongs_to :student
  has_one :form
  enum status: {
    waiting: 'waiting',
    accepted: 'accepted',
    declined: 'declined'
  }
  #deletes student after given time eapse if student admission is declined
  # def delete_student_after_one_hour
  #   self.student.delay_for(1.second).destroy
  # end
  
  #delets sutednt after some seconds if admission student is declined
  def delete_student_after_three_seconds
    DeleteStudentJob.set(wait: 3.seconds).perform_later(self.student.id)
  end
  
   

end
