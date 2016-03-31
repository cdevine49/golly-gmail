class AddColumnToEmail < ActiveRecord::Migration
  def change
    add_column :emails, :mailbox, :integer, default: 1
  end
end
