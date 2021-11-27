# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_11_27_040841) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.string "message"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "tickets_id"
    t.bigint "users_id"
    t.index ["tickets_id"], name: "index_comments_on_tickets_id"
    t.index ["users_id"], name: "index_comments_on_users_id"
  end

  create_table "favourites", id: false, force: :cascade do |t|
    t.integer "user_id"
    t.integer "map_id"
  end

  create_table "maps", id: :serial, force: :cascade do |t|
    t.string "title", limit: 255, null: false
    t.string "description", limit: 255, null: false
    t.integer "user_id"
    t.string "preview_image", limit: 255, null: false
    t.datetime "created_at"
  end

  create_table "points", id: :serial, force: :cascade do |t|
    t.string "title", limit: 255, null: false
    t.string "description", limit: 255, null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.integer "map_id"
    t.integer "user_id"
    t.string "category", limit: 255, null: false
  end

  create_table "project_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "projects", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.date "start_date"
    t.date "end_date"
    t.integer "percentage_complete"
    t.string "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "users_id"
    t.bigint "project_type_id"
    t.index ["project_type_id"], name: "index_projects_on_project_type_id"
    t.index ["users_id"], name: "index_projects_on_users_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.string "title"
    t.boolean "complete?"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "tickets_id"
    t.index ["tickets_id"], name: "index_tasks_on_tickets_id"
  end

  create_table "tickets", force: :cascade do |t|
    t.date "start_date"
    t.date "end_date"
    t.integer "plan_duration"
    t.string "title"
    t.string "description"
    t.string "status", default: "On Track"
    t.integer "percentage_complete"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "projects_id"
    t.bigint "users_id"
    t.string "priority"
    t.string "category"
    t.index ["projects_id"], name: "index_tickets_on_projects_id"
    t.index ["users_id"], name: "index_tickets_on_users_id"
  end

  create_table "user_projects", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "users_id"
    t.bigint "projects_id"
    t.index ["projects_id"], name: "index_user_projects_on_projects_id"
    t.index ["users_id"], name: "index_user_projects_on_users_id"
  end

  create_table "user_tickets", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "users_id"
    t.bigint "tickets_id"
    t.index ["tickets_id"], name: "index_user_tickets_on_tickets_id"
    t.index ["users_id"], name: "index_user_tickets_on_users_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone_number"
    t.boolean "admin"
    t.string "password"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "comments", "tickets", column: "tickets_id"
  add_foreign_key "comments", "users", column: "users_id"
  add_foreign_key "favourites", "maps", name: "favourites_map_id_fkey", on_delete: :cascade
  add_foreign_key "points", "maps", name: "points_map_id_fkey", on_delete: :cascade
  add_foreign_key "projects", "project_types"
  add_foreign_key "projects", "users", column: "users_id"
  add_foreign_key "tasks", "tickets", column: "tickets_id"
  add_foreign_key "tickets", "projects", column: "projects_id"
  add_foreign_key "tickets", "users", column: "users_id"
  add_foreign_key "user_projects", "projects", column: "projects_id"
  add_foreign_key "user_projects", "users", column: "users_id"
  add_foreign_key "user_tickets", "tickets", column: "tickets_id"
  add_foreign_key "user_tickets", "users", column: "users_id"
end
