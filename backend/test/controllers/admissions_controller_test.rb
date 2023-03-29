require "test_helper"

class AdmissionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admission = admissions(:one)
  end

  test "should get index" do
    get admissions_url, as: :json
    assert_response :success
  end

  test "should create admission" do
    assert_difference("Admission.count") do
      post admissions_url, params: { admission: { admission_date: @admission.admission_date, admission_number: @admission.admission_number, form: @admission.form } }, as: :json
    end

    assert_response :created
  end

  test "should show admission" do
    get admission_url(@admission), as: :json
    assert_response :success
  end

  test "should update admission" do
    patch admission_url(@admission), params: { admission: { admission_date: @admission.admission_date, admission_number: @admission.admission_number, form: @admission.form } }, as: :json
    assert_response :success
  end

  test "should destroy admission" do
    assert_difference("Admission.count", -1) do
      delete admission_url(@admission), as: :json
    end

    assert_response :no_content
  end
end
