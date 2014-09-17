class Supporter < ActiveRecord::Base
  validates :email, uniqueness: true, presence: true
  validates :name, :area, presence: true
  validates :email_confirmed, :approved, inclusion: [true, false]
  validates :organization, presence: true, if: :is_organization?
end
