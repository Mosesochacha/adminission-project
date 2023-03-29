require "test_helper"

class ClassesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @class = classes(:one)
  end

  test "should get index" do
    get classes_url, as: :json
    assert_response :success
  end

  test "should create class" do
    assert_difference("Class.count") do
      post classes_url, params: { class: { capacity: @class.capacity, class_name: @class.class_name, remaining_capacity: @class.remaining_capacity, year: @class.year } }, as: :json
    end

    assert_response :created
  end

  test "should show class" do
    get class_url(@class), as: :json
    assert_response :success
  end

  test "should update class" do
    patch class_url(@class), params: { class: { capacity: @class.capacity, class_name: @class.class_name, remaining_capacity: @class.remaining_capacity, year: @class.year } }, as: :json
    assert_response :success
  end

  test "should destroy class" do
    assert_difference("Class.count", -1) do
      delete class_url(@class), as: :json
    end

    assert_response :no_content
  end
end
