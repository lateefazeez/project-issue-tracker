class AddFks < ActiveRecord::Migration[6.1]
  def change
    add_reference :tickets, :projects, foreign_key: true
    add_reference :tasks, :tickets, foreign_key: true
    add_reference :comments, :tickets, foreign_key: true
    add_reference :tickets, :users, foreign_key: true
  end
end
