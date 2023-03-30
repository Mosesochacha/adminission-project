class Course < ApplicationRecord
  has_and_belongs_to_many :students
  has_and_belongs_to_many :teachers
  has_many :forms
end