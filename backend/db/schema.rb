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

ActiveRecord::Schema[7.0].define(version: 2023_04_02_145812) do
  create_table "admissions", force: :cascade do |t|
    t.date "admission_date"
    t.string "admission_number"
    t.integer "student_id"
    t.integer "course_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "status", default: "waiting"
    t.index ["course_id"], name: "index_admissions_on_course_id"
    t.index ["student_id"], name: "index_admissions_on_student_id"
  end

  create_table "course_students", force: :cascade do |t|
    t.integer "course_id", null: false
    t.integer "student_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_course_students_on_course_id"
    t.index ["student_id"], name: "index_course_students_on_student_id"
  end

  create_table "course_teachers", force: :cascade do |t|
    t.integer "course_id", null: false
    t.integer "teacher_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_course_teachers_on_course_id"
    t.index ["teacher_id"], name: "index_course_teachers_on_teacher_id"
  end

  create_table "courses", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.integer "year"
    t.integer "term"
    t.string "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "courses_students", force: :cascade do |t|
    t.integer "course_id", null: false
    t.integer "student_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["course_id"], name: "index_courses_students_on_course_id"
    t.index ["student_id"], name: "index_courses_students_on_student_id"
  end

  create_table "courses_teachers", id: false, force: :cascade do |t|
    t.integer "course_id", null: false
    t.integer "teacher_id", null: false
  end

  create_table "delayed_jobs", force: :cascade do |t|
    t.integer "priority", default: 0, null: false
    t.integer "attempts", default: 0, null: false
    t.text "handler", null: false
    t.text "last_error"
    t.datetime "run_at"
    t.datetime "locked_at"
    t.datetime "failed_at"
    t.string "locked_by"
    t.string "queue"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.index ["priority", "run_at"], name: "delayed_jobs_priority"
  end

  create_table "forms", force: :cascade do |t|
    t.string "name"
    t.integer "year"
    t.integer "teacher_id"
    t.integer "course_id"
    t.integer "admission_id"
    t.integer "capacity"
    t.integer "remaining_capacity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["admission_id"], name: "index_forms_on_admission_id"
    t.index ["course_id"], name: "index_forms_on_course_id"
    t.index ["teacher_id"], name: "index_forms_on_teacher_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "gender"
    t.string "email"
    t.integer "form"
    t.string "image"
    t.date "date_of_birth"
    t.integer "admission_year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "admission_status"
  end

  create_table "teachers", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "phone_number"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.string "username"
    t.string "role"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
  end

  add_foreign_key "admissions", "courses"
  add_foreign_key "admissions", "students"
  add_foreign_key "course_students", "courses"
  add_foreign_key "course_students", "students"
  add_foreign_key "course_teachers", "courses"
  add_foreign_key "course_teachers", "teachers"
  add_foreign_key "courses_students", "courses"
  add_foreign_key "courses_students", "students"
  add_foreign_key "forms", "admissions"
  add_foreign_key "forms", "courses"
  add_foreign_key "forms", "teachers"
end
