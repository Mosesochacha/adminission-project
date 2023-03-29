class Form < ApplicationRecord
  belongs_to :teacher
  has_many :admissions
  has_many :students, through: :admissions
  belongs_to :course
end
