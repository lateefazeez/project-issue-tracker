class UserProject < ApplicationRecord
  belongs_to :user, foreign_key: :users_id
  belongs_to :project, foreign_key: :projects_id
  has_many :user_tickets, foreign_key: :projects_id, dependent: :destroy

end
