class Admission < ApplicationRecord
  belongs_to :student
  has_one :form

  enum status: {
    waiting: 'waiting',
    accepted: 'accepted',
    declined: 'declined'
  }
  
  def delete_student_after_one_hour
    self.student.delay_for(1.hour).destroy
  end
  
   
  

end
