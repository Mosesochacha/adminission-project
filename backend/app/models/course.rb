class Course < ApplicationRecord
  has_many :forms
  
  has_and_belongs_to_many :students
end