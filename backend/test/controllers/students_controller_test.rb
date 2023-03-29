require "test_helper"

class StudentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @student = students(:one)
  end

  test "should get index" do
    get students_url, as: :json
    assert_response :success
  end

  test "should create student" do
    assert_difference("Student.count") do
      post students_url, params: { student: { admission_year: @student.admission_year, date_of_birth: @student.date_of_birth, first_name: @student.first_name, gender: @student.gender, last_name: @student.last_name } }, as: :json
    end

    assert_response :created
  end

  test "should show student" do
    get student_url(@student), as: :json
    assert_response :success
  end

  test "should update student" do
    patch student_url(@student), params: { student: { admission_year: @student.admission_year, date_of_birth: @student.date_of_birth, first_name: @student.first_name, gender: @student.gender, last_name: @student.last_name } }, as: :json
    assert_response :success
  end

  test "should destroy student" do
    assert_difference("Student.count", -1) do
      delete student_url(@student), as: :json
    end

    assert_response :no_content
  end
end
