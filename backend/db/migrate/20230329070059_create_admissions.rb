class CreateAdmissions < ActiveRecord::Migration[7.0]
  def change
    create_table :admissions do |t|
      t.date :admission_date
      t.string :admission_number
      t.references :student, null: false, foreign_key: true
      t.references :form, null: false, foreign_key: true
      t.integer :form

      t.timestamps
    end
  end
end
