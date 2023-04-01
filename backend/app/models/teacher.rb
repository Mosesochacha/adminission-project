class Teacher < ApplicationRecord
  has_many :course_teachers, dependent: :destroy
  has_many :courses, through: :course_teachers
  has_many :forms, dependent: :destroy

end
