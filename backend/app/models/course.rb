class Course < ApplicationRecord
  has_many :course_students, dependent: :destroy
  has_many :students, through: :course_students
  
  has_many :course_teachers, dependent: :destroy
  has_many :teachers, through: :course_teachers
  has_many :forms
end