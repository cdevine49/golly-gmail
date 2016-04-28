class AddReceivedColumnToEmails < ActiveRecord::Migration
  def change
    add_column :emails, :received, :boolean, :default => false
  end
end
