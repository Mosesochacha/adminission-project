class Student < ApplicationRecord
  has_many :admissions
  has_many :forms, through: :admissions
  has_and_belongs_to_many :courses
end
