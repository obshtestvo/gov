class AddNameToSupporters < ActiveRecord::Migration
  def up
    add_column :supporters, :name, :string, null: false

    Supporter.all.each do |s|
      s.name = s.first_name + " " + s.last_name
      s.save
    end
  end

  def down
    remove_column :supporters, :name, :string
  end
end
