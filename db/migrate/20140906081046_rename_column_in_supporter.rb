class RenameColumnInSupporter < ActiveRecord::Migration
  def change
    rename_column :supporters, :sphere, :area
    rename_column :supporters, :supporter_kind, :kind
  end
end
