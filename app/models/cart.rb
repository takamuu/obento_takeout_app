class Cart < ApplicationRecord
  belongs_to :user
  has_many :cart_details, dependent: :destroy
  has_many :foods, through: :cart_details
  has_many :cart_details_foods, through: :cart_details, source: :food

  validates :user_id, uniqueness: true
  validates :total_price, presence: true, numericality: { greater_than: 0 }

  # active等削除したので、後で要確認
  def save_with_update_temporary_orders!(temporary_orders)
    ActiveRecord::Base.transaction do
      temporary_orders.each do |temporary_order|
        temporary_order.update_attributes!(active: false, order: self)
      end
      self.save!
    end
  end

  # def restaurant_duplicate_check
  #  暫定的にuserをid:1に限定（ログイン機能実装時に、User判定ロジックを追加）
  #  all_food_in_cart = User.find_by(id:1).cart.foods
  #  if @ordered_food.restaurant_id != all_food_in_cart.first.restaurant_id
  #    return render json: {
  #      existing_restaurant: all_food_in_cart.first.restaurant.name,
  #      new_restaurant: Food.find(params[:food_id]).restaurant.name,
  #    }, status: :not_acceptable
  #  end
  # end
  
  # todo: カートindexを実装時に検討
  # def render_cart_details(cart_details) 
  #   if cart_details.save
  #     render json: 
  #       cart_details, status: :created
  #   else
  #     render json: {}, status: :internal_server_error
  #   end
  # end
end
