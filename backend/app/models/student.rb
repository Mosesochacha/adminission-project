class Student < ApplicationRecord
  has_and_belongs_to_many :courses
  has_many :admissions
  has_many :forms, through: :admissions
end
