class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.string :email
      t.string :image
      t.date :date_of_birth
      t.integer :admission_year

      t.timestamps
    end
  end
end
