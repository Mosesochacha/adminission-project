class Course < ApplicationRecord
  has_and_belongs_to_many :students , dependent: :destroy
  has_and_belongs_to_many :teachers ,dependent: :destroy
  has_many :forms
end