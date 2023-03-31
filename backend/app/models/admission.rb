class Admission < ApplicationRecord
  belongs_to :student, dependent: :destroy
  belongs_to :form
end
