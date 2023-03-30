class AddStatus < ActiveRecord::Migration[7.0]
  def change
    add_column :admissions, :status, :string, default: "waiting"
  end
end
