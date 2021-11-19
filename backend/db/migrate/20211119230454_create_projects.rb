class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :description
      t.date :start_date
      t.date :end_date
      t.integer :percentage_complete
      t.string :status

      t.timestamps
    end
  end
end
