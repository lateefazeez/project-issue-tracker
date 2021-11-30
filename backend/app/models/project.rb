class Project < ApplicationRecord
  has_many :user_projects, foreign_key: :projects_id, dependent: :destroy
  has_many :users, through: :user_projects, dependent: :destroy
  has_many :tickets, foreign_key: :projects_id, dependent: :destroy
end
