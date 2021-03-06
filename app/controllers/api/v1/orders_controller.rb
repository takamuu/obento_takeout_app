module Api
  module V1
    class OrdersController < ApplicationController
      before_action :authenticate_api_v1_user!

      def index
        if Order.check_users_order_history?(current_api_v1_user)
          @orders = current_api_v1_user.orders.order(id: "DESC")
          render json: @orders, include: { order_details: [:food] }, status: :ok
        else
          render json: [], status: :no_content
        end
      end

      def create
        if Order.confirm_cart_presence?(order_params[:user_id].to_i) && Order.create_order_history(current_api_v1_user)
          @orders = current_api_v1_user.orders.last
          render json: @orders, include: { order_details: [:food] }, status: :ok
        else
          render json: [], status: :no_content
        end
      end

      private

        def order_params
          params.permit(:user_id)
        end
    end
  end
end
