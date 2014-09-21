class Supporter < ActiveRecord::Base
  validates :email, uniqueness: true, presence: true
  validates :full_name, :area, presence: true
  validates :email_confirmed, :approved, inclusion: [true, false]
  validates :organization, presence: true, if: :is_organization?
  validate  :full_name_contains_at_least_two_names

  def full_name
    return if first_name.nil? and last_name.nil?

    "#{first_name} #{last_name}".strip
  end

  def full_name=(new_full_name)
    first, *last = new_full_name.to_s.split(/\s+/)

    self.first_name = first
    self.last_name  = last.join(' ')
    self.last_name  = nil if last.empty?

    full_name
  end

  private

  def full_name_contains_at_least_two_names
    if first_name.nil? or last_name.nil?
      errors.add :full_name, :requires_at_least_two_names
    end
  end
end
