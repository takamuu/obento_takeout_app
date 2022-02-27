# frozen_string_literal: true

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  include DeviseTokenAuth::Concerns::User

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i

  has_one :cart,    dependent: :destroy
  has_many :orders, dependent: :destroy
  has_many :cart_details, through: :cart, source: :cart_details

  validates :name,         presence: true
  validates :kana,         presence: true
  validates :email,        presence: true, uniqueness: true, length: { maximum: 255 },
                           format: { with: VALID_EMAIL_REGEX }
  # validates :password,     presence: true
  validates :phone_number, presence: true
  # validates :status,       presence: true

  enum status: {
    active: 0,
    supended: 1,
  }
end
