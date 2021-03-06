module Api
  module V1
    class CartsController < ApplicationController
      before_action :authenticate_api_v1_user!
      before_action :set_food, only: %i[create]

      def index
        if current_api_v1_user.cart.present? && current_api_v1_user.cart_details.present?
          @cart_details = current_api_v1_user.cart_details
          render json: @cart_details, status: :ok
        else
          render json: [], status: :no_content
        end
      end

      def create
        if current_api_v1_user.cart_details.present? && Cart.check_other_restaurant?(current_api_v1_user, @ordered_food)
          return render_not_acceptable
        end

        cart_detail = Cart.create_cart_and_cart_details(current_api_v1_user, @ordered_food, @food_count)
        if cart_detail.save! && current_api_v1_user.cart.total_price_update!
          render json: current_api_v1_user.cart_details, status: :ok
        else
          render json: [], status: :internal_server_error
        end
      end

      private

        def set_food
          @ordered_food = Food.find(params[:food_id].to_i)
          @food_count = cart_details_params[:count].to_i
        end

        def cart_details_params
          params.permit(:food_id, :count)
        end

        def render_not_acceptable
          @restaurants = Cart.fetch_restaurant(current_api_v1_user, @ordered_food)
          render json: @restaurants, status: :not_acceptable
        end
    end
  end
end
