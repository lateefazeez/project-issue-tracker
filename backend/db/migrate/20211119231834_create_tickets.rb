class CreateTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :tickets do |t|
      t.date :start_date
      t.date :end_date
      t.integer :plan_duration
      t.string :title
      t.string :description
      t.string :status
      t.integer :percentage_complete

      t.timestamps
    end
  end
end
