class ChangeColumnsEmail < ActiveRecord::Migration
  def change
    change_column :emails, :to, :string, :null => true
    remove_column :emails, :marked, :boolean
    add_column :emails, :sent, :boolean, :default => false
  end
end
