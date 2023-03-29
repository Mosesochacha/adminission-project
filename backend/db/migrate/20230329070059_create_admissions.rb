class CreateAdmissions < ActiveRecord::Migration[7.0]
  def change
    create_table :admissions do |t|
      t.date :admission_date
      t.string :admission_number
      t.integer :form

      t.timestamps
    end
  end
end
