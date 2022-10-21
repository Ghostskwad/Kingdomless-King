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

ActiveRecord::Schema[7.0].define(version: 2022_10_19_154354) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.string "name", default: "Blake", null: false
    t.string "pronoun", default: "he", null: false
    t.integer "level", default: 54
    t.string "klass", default: "Caster"
    t.integer "health", default: 2745
    t.integer "constitution", default: 47
    t.integer "strength", default: 27
    t.integer "dexterity", default: 78
    t.integer "intelligence", default: 150
    t.bigint "player_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_id"], name: "index_characters_on_player_id"
  end

  create_table "enemies", force: :cascade do |t|
    t.string "name"
    t.integer "level"
    t.integer "health"
    t.integer "constitution"
    t.integer "strength"
    t.integer "dexterity"
    t.integer "intelligence"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "equipment", force: :cascade do |t|
    t.string "name"
    t.string "slot"
    t.string "modifier_type"
    t.integer "modifier_value"
    t.text "flavor_text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "equipment_slots", force: :cascade do |t|
    t.bigint "equipment_id", null: false
    t.string "wearer_type"
    t.bigint "wearer_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["equipment_id"], name: "index_equipment_slots_on_equipment_id"
    t.index ["wearer_type", "wearer_id"], name: "index_equipment_slots_on_wearer"
  end

  create_table "spell_slots", force: :cascade do |t|
    t.bigint "spell_id", null: false
    t.string "caster_type"
    t.bigint "caster_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["caster_type", "caster_id"], name: "index_spell_slots_on_caster"
    t.index ["spell_id"], name: "index_spell_slots_on_spell_id"
  end

  create_table "spells", force: :cascade do |t|
    t.string "name"
    t.integer "value"
    t.text "flavor_text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "states", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "character_id", null: false
    t.string "boss1_type"
    t.bigint "boss1_id"
    t.string "boss2_type"
    t.bigint "boss2_id"
    t.integer "session", default: 1
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["boss1_type", "boss1_id"], name: "index_states_on_boss1"
    t.index ["boss2_type", "boss2_id"], name: "index_states_on_boss2"
    t.index ["character_id"], name: "index_states_on_character_id"
    t.index ["user_id"], name: "index_states_on_user_id"
  end

  create_table "stories", force: :cascade do |t|
    t.text "paragraph"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "characters", "characters", column: "player_id"
  add_foreign_key "equipment_slots", "equipment"
  add_foreign_key "spell_slots", "spells"
  add_foreign_key "states", "characters"
  add_foreign_key "states", "users"
end
