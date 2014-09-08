class Supporter < ActiveRecord::Base
  validates :email, uniqueness: true, presence: true
  validates :first_name, :last_name, :area, presence: true
  validates :email_confirmed, :approved, inclusion: [true, false]
  validates :organization, presence: true, if: :is_organization?

  after_save :send_email_verification

  private
  def send_email_verification
    ApplicationMailer.verify_email(self).deliver
    return true
  end
end
