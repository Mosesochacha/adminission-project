class Form < ApplicationRecord
  belongs_to :teacher
  belongs_to :course
  belongs_to :admission
  has_and_belongs_to_many :students
end
