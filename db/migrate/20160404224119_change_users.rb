class ChangeUsers < ActiveRecord::Migration
  def change
    remove_index :users, :username
    remove_index :users, :session_token
    add_index :users, :session_token
  end
end
