class AddFksJointable < ActiveRecord::Migration[6.1]
  def change
    add_reference :user_projects, :users, foreign_key: true
    add_reference :user_projects, :projects, foreign_key: true

    add_reference :user_tickets, :users, foreign_key: true
    add_reference :user_tickets, :tickets, foreign_key: true
  end
end
