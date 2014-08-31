class CreateSupporters < ActiveRecord::Migration
  def change
    create_table :supporters do |t|
      t.string :first_name
      t.string :last_name
      t.string :organization
      t.string :supporter_kind
      t.string :sphere
      t.string :email
      t.string :email_confirmed
      t.boolean :approved

      t.timestamps
    end
  end
end
