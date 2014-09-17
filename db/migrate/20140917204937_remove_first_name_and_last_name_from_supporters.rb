class RemoveFirstNameAndLastNameFromSupporters < ActiveRecord::Migration
  def change
    remove_column :supporters, :first_name, :string
    remove_column :supporters, :last_name, :string
  end
end
