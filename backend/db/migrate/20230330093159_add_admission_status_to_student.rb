class AddAdmissionStatusToStudent < ActiveRecord::Migration[7.0]
  def change
    add_column :students, :admission_status, :string
  end
end
