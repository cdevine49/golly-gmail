class DropMailboxesTable < ActiveRecord::Migration
  def change
    drop_table :mailboxes
    remove_column :emails, :mailbox_id, :integer
  end
end
