class Supporter < ActiveRecord::Base
  validates :email, uniqueness: true, presence: true
  validates :first_name, :last_name, :kind, :area, presence: true
  validates :email_confirmed, :approved, inclusion: [true, false]
end
