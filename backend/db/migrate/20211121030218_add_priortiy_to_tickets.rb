class AddPriortiyToTickets < ActiveRecord::Migration[6.1]
  def change
    add_column :tickets, :priority, :string
  end
end
