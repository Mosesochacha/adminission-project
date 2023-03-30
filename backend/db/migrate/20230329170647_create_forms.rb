class CreateForms < ActiveRecord::Migration[7.0]
  def change
    create_table :forms do |t|
      t.string :name
      t.integer :year
      t.references :teacher, foreign_key: true, index: true
      t.references :course, foreign_key: true, index: true
      t.references :admission, foreign_key: true, index: true
      t.integer :capacity
      t.integer :remaining_capacity

      t.timestamps
    end
  end
end
