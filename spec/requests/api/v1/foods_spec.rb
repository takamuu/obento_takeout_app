require "rails_helper"

RSpec.describe "Api::V1::Foods", type: :request do
  describe "GET /index" do
    xit "returns http success" do
      get "/api/v1/foods/index"
      expect(response).to have_http_status(:success)
    end
  end
end
