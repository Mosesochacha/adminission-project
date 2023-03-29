class CreateForms < ActiveRecord::Migration[7.0]
  def change
    create_table :forms do |t|
      t.string :name
      t.integer :year
      t.references :teacher, null: false, foreign_key: true
      t.references :course, null: false, foreign_key: true
      t.integer :capacity
      t.integer :remaining_capacity

      t.timestamps
    end
  end
end
