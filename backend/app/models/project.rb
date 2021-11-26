class Project < ApplicationRecord
  # belongs_to :user
  has_many :user_projects, foreign_key: :projects_id, dependent: :delete_all 
  has_many :users, through: :user_projects
  has_many :tickets, foreign_key: :projects_id, dependent: :delete_all 
end
