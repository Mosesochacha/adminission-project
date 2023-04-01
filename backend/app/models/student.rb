class Student < ApplicationRecord
  has_many :admissions, dependent: :destroy
  has_many :course_students, dependent: :destroy
  has_many :courses, through: :course_students
  has_many :forms, through: :admissions
end
