class ChangeColumnEmails < ActiveRecord::Migration
  def change
    change_column :emails, :to, :string
    change_column :emails, :from, :string
  end
end
