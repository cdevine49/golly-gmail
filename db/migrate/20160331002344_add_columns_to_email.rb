class AddColumnsToEmail < ActiveRecord::Migration
  def change
    add_column :emails, :checked, :boolean, default: false
    add_column :emails, :starred, :boolean, default: false
    add_column :emails, :important, :boolean, default: false
  end
end
