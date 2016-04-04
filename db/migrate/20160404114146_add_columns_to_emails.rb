class AddColumnsToEmails < ActiveRecord::Migration
  def change
    add_column :emails, :marked, :boolean, default: false
    add_column :emails, :starred, :boolean, default: false
    add_column :emails, :important, :boolean, default: false
    add_column :emails, :read, :boolean, default: false
  end
end
