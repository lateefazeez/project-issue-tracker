class Ticket < ApplicationRecord
  has_many :user_tickets
  has_many :users, through: :user_tickets
  has_many :comments, foreign_key: :tickets_id, dependent: :delete_all 
end
