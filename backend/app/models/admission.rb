class Admission < ApplicationRecord
  belongs_to :student
  belongs_to :form
end
