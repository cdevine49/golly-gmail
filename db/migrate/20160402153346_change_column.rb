class ChangeColumn < ActiveRecord::Migration
  def change
    change_column :users, :birthday, :Date
  end
end
