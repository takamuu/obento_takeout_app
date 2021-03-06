class OrderSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :rceipt_number, :total_price, :consumption_tax, :progress_status, :restaurant_name, :restaurant, :created_at
  has_many :order_details

  def restaurant_name
    object.order_details.first.food.restaurant.name
  end

  def restaurant
    object.order_details.first.food.restaurant
  end
end
