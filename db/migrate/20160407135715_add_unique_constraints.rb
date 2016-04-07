class AddUniqueConstraints < ActiveRecord::Migration
  def change
    add_index :users, [:username, :gollygmail], :unique => true
  end
end
