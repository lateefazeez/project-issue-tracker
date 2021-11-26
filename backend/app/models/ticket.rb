class Ticket < ApplicationRecord
  has_many :user_tickets, foreign_key: :tickets_id, dependent: :destroy
  has_many :users, through: :user_tickets
  has_many :comments, foreign_key: :tickets_id, dependent: :destroy
  has_many :tasks, foreign_key: :tickets_id, dependent: :destroy
end
