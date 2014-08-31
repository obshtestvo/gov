class ChangeSupportersColumnDefaults < ActiveRecord::Migration
  def up
    change_table :supporters do |t|
      t.change :first_name, :string, null: false
      t.change :last_name, :string, null: false
      t.change :organization, :string
      t.change :supporter_kind, :string, null: false
      t.change :sphere, :string, null: false
      t.change :email, :string, null: false
      t.change :approved, :boolean, null: false, default: false
    end

    # We need to separately drop this column, as PostgreSQL can't cast
    # the string column to boolean directly.
    remove_column :supporters, :email_confirmed
    add_column :supporters, :email_confirmed, :boolean, null: false, default: false
  end

  def down
    change_table :supporters do |t|
      t.change :first_name, :string
      t.change :last_name, :string
      t.change :organization, :string
      t.change :supporter_kind, :string
      t.change :sphere, :string
      t.change :email, :string
      t.change :email_confirmed, :string
      t.change :approved, :boolean
    end
  end
end
