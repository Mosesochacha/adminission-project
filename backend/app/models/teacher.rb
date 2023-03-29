class Teacher < ApplicationRecord
  has_many :forms
  has_many :courses, through: :forms
end
