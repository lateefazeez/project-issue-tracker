class AddForeignKeyToUserTickets < ActiveRecord::Migration[6.1]
  def change
    add_reference :user_tickets, :projects, foreign_key: true
  end
end
