require "rails_helper"

RSpec.describe "Api::V1::Restaurants", type: :request do
  describe "GET /index" do
    xit "returns http success" do
      get "/api/v1/restaurants/index"
      expect(response).to have_http_status(:success)
    end
  end
end
