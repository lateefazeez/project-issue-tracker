class AddTypeToTickets < ActiveRecord::Migration[6.1]
  def change
    add_column :tickets, :category, :string
  end
end
