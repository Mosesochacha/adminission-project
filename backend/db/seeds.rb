require 'faker'
puts "Seeding records..."

# Create some users
5.times do
  User.create!(
    email: Faker::Internet.email,
    password: "password",
    username: Faker::Internet.username
  )
end

# Create some teachers
5.times do
  Teacher.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['teacher']),
    phone_number: Faker::PhoneNumber.phone_number
  )
end

# Create some students
20.times do
  Student.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    gender: Faker::Gender.binary_type,
    # email: Faker::Internet.email,
    form: Faker::Number.between(from: 1, to: 4),
    image: Faker::LoremFlickr.image(size: "300x300", search_terms: ['student']),
    date_of_birth: Faker::Date.between(from: '1980-01-01', to: '2004-12-31'),
    admission_year: Faker::Number.between(from: 2015, to: 2021),
    admission_status: Faker::Boolean.boolean
  )
end

# Create some courses
titles = []
10.times do
  begin
    title = Faker::Educator.course_title
  end while titles.include?(title) # loop until a unique title is generated

  titles << title # add the new title to the array

  Course.create!(
    name: Faker::Educator.course_name,
    title: title,
    description: Faker::Lorem.sentence(word_count: 10),
    year: Faker::Number.between(from: 1, to: 5),
    term: Faker::Number.between(from: 1, to: 3),
    
  )
end

# Create course_teachers join table records
Course.all.each do |course|
  teacher = Teacher.all.sample
  course.teachers << teacher
end


# Create course_students join table records
Course.all.each do |course|
  5.times do
    student = Student.all.sample
    course.students << student
  end
end


# Create some admissions
30.times do
  Admission.create!(
    admission_date: Faker::Date.between(from: '2020-09-01', to: '2021-08-31'),
    admission_number: Faker::Number.between(from: 1000, to: 9999),
    student_id: Faker::Number.between(from: 1, to: 20),
    course_id: Faker::Number.between(from: 1, to: 10),
    status: ["waiting", "accepted", "declined"].sample
  )
end

# Create some forms
5.times do
  Form.create!(
    name: Faker::Lorem.word,
    year: Faker::Number.between(from: 2015, to: 2021),
    teacher_id: Faker::Number.between(from: 1, to: 5),
    course_id: Faker::Number.between(from: 1, to: 10),
    admission_id: Faker::Number.between(from: 1, to: 30),
    capacity: Faker::Number.between(from: 20, to: 50),
    remaining_capacity: Faker::Number.between(from: 0, to: 19)
  )
end

puts "Seeding completed successfully!"
