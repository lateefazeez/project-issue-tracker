class CreateUserTickets < ActiveRecord::Migration[6.1]
  def change
    create_table :user_tickets do |t|

      t.timestamps
    end
  end
end
