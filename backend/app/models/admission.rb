class Admission < ApplicationRecord
  belongs_to :student

  belongs_to :form
  enum status: {
    waiting: 'waiting',
    acceptance: 'acceptance',
    declined: 'declined'
  }
end
