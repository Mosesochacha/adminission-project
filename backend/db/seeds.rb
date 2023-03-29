require 'faker'
puts "Seeding data...."

# Create teachers
10.times do
  Teacher.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    phone_number: Faker::PhoneNumber.cell_phone_with_country_code
  )
end

# Create courses
10.times do
  Course.create!(
    name: Faker::Educator.course_name,
    description: Faker::Lorem.paragraph(sentence_count: 3),
    year: Faker::Number.between(from: 2020, to: 2050),
    term: Faker::Number.between(from: 1, to: 4)
  )
end

# Create forms
10.times do
  Form.create!(
    name: Faker::Educator.subject,
    year: Faker::Number.between(from: 2020, to: 2050),
    teacher_id: Faker::Number.between(from: 1, to: 10),
    course_id: Faker::Number.between(from: 1, to: 10),
    capacity: Faker::Number.between(from: 20, to: 30),
    remaining_capacity: Faker::Number.between(from: 5, to: 25)
  )
end

# Create students
50.times do
  Student.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    gender: Faker::Gender.binary_type,
    date_of_birth: Faker::Date.between(from: 20.years.ago, to: Date.today),
    admission_year: Faker::Number.between(from: 2010, to: 2020)
  )
end

# Create admissions
50.times do
  Admission.create!(
    admission_date: Faker::Date.between(from: 3.years.ago, to: Date.today),
    admission_number: Faker::Number.unique.between(from: 1000, to: 6000),
    student_id: Faker::Number.between(from: 1, to: 50),
    form_id: Faker::Number.between(from: 1, to: 10),
    form: Form.create!(
      name: Faker::Educator.subject,
      year: Faker::Number.between(from: 2020, to: 2050),
      teacher_id: Faker::Number.between(from: 1, to: 10),
      course_id: Faker::Number.between(from: 1, to: 10),
      capacity: Faker::Number.between(from: 20, to: 30),
      remaining_capacity: Faker::Number.between(from: 5, to: 25)
    )
  )
end

puts "Seeding Complete"
