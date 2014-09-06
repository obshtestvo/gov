class ChangeKindFormatInSupporters < ActiveRecord::Migration
  def change
    remove_column :supporters, :kind, :string
    add_column :supporters, :is_organization, :boolean
  end
end

