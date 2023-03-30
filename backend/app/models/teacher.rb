class Teacher < ApplicationRecord
 has_and_belongs_to_many :courses
has_many :forms
end
