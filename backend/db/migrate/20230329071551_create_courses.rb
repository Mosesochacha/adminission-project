class CreateCourses < ActiveRecord::Migration[7.0]
  def change
    create_table :courses do |t|
      t.string :name
      t.string :description
      t.integer :year
      t.integer :term
      t.references :student, foreign_key: true, index: true
      t.references :teacher, foreign_key: true, index: true
      t.timestamps
    end
  end
end
