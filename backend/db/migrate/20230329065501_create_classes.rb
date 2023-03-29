class CreateClasses < ActiveRecord::Migration[7.0]
  def change
    create_table :classes do |t|
      t.string :class_name
      t.integer :year
      t.integer :capacity
      t.integer :remaining_capacity

      t.timestamps
    end
  end
end
