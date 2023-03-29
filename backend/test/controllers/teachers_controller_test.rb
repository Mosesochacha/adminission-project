require "test_helper"

class TeachersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @teacher = teachers(:one)
  end

  test "should get index" do
    get teachers_url, as: :json
    assert_response :success
  end

  test "should create teacher" do
    assert_difference("Teacher.count") do
      post teachers_url, params: { teacher: { email: @teacher.email, first_name: @teacher.first_name, last_name: @teacher.last_name, phone_number: @teacher.phone_number } }, as: :json
    end

    assert_response :created
  end

  test "should show teacher" do
    get teacher_url(@teacher), as: :json
    assert_response :success
  end

  test "should update teacher" do
    patch teacher_url(@teacher), params: { teacher: { email: @teacher.email, first_name: @teacher.first_name, last_name: @teacher.last_name, phone_number: @teacher.phone_number } }, as: :json
    assert_response :success
  end

  test "should destroy teacher" do
    assert_difference("Teacher.count", -1) do
      delete teacher_url(@teacher), as: :json
    end

    assert_response :no_content
  end
end
