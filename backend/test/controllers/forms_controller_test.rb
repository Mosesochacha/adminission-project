require "test_helper"

class FormsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @form = forms(:one)
  end

  test "should get index" do
    get forms_url, as: :json
    assert_response :success
  end

  test "should create form" do
    assert_difference("Form.count") do
      post forms_url, params: { form: { capacity: @form.capacity, name: @form.name, remaining_capacity: @form.remaining_capacity, subject_id: @form.subject_id, teacher_id: @form.teacher_id, year: @form.year } }, as: :json
    end

    assert_response :created
  end

  test "should show form" do
    get form_url(@form), as: :json
    assert_response :success
  end

  test "should update form" do
    patch form_url(@form), params: { form: { capacity: @form.capacity, name: @form.name, remaining_capacity: @form.remaining_capacity, subject_id: @form.subject_id, teacher_id: @form.teacher_id, year: @form.year } }, as: :json
    assert_response :success
  end

  test "should destroy form" do
    assert_difference("Form.count", -1) do
      delete form_url(@form), as: :json
    end

    assert_response :no_content
  end
end
