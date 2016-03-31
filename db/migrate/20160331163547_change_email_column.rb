class ChangeEmailColumn < ActiveRecord::Migration
  def change
    change_column_null(:emails, :mailbox, :integer, null: false)
  end
end
