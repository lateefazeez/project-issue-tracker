class UserProject < ApplicationRecord
  belongs_to :user, foreign_key: :users_id
  belongs_to :project, foreign_key: :projects_id
end
