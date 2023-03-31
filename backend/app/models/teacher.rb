class Teacher < ApplicationRecord
  has_many :forms , dependent: :destroy
  has_many :courses, through: :forms
end
