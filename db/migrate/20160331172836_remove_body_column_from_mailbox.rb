class RemoveBodyColumnFromMailbox < ActiveRecord::Migration
  def change
    remove_column :mailboxes, :body
  end
end
