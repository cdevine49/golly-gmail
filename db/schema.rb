# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160406153518) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "emails", force: :cascade do |t|
    t.text     "body"
    t.string   "to",                                 null: false
    t.string   "from_name",                          null: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.string   "subject",                            null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "from_email",                         null: false
    t.boolean  "marked",             default: false
    t.boolean  "starred",            default: false
    t.boolean  "important",          default: false
    t.boolean  "read",               default: false
  end

  add_index "emails", ["from_name"], name: "sender_index", using: :btree
  add_index "emails", ["to"], name: "recipient_index", using: :btree

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "gollygmail",      null: false
    t.date     "birthday",        null: false
    t.string   "gender",          null: false
    t.string   "secondary_email"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
