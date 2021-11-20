class AddForeignKeyToProjectTypes < ActiveRecord::Migration[6.1]
  def change
    add_reference :projects, :project_type, index: true, foreign_key: true
  end
end
