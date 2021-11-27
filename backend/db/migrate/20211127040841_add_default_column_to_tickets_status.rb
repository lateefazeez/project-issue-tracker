class AddDefaultColumnToTicketsStatus < ActiveRecord::Migration[6.1]
  def up
    change_column :tickets, :status, :string, :default => "On Track"
  end
  def down
    change_column :tickets, :status, :string, :default => "On Track"
  end
end
