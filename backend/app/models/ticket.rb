class Ticket < ApplicationRecord
  has_many :user_tickets
  has_many :users, through: :user_tickets
end
