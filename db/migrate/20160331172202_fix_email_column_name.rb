class FixEmailColumnName < ActiveRecord::Migration
  def change
    rename_column :emails, :mailbox, :mailbox_id
  end
end
