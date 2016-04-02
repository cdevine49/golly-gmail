class AddNullConstraints < ActiveRecord::Migration
  def change
    change_column :users, :first_name, :string, null:false
    change_column :users, :last_name, :string, null:false
    change_column :users, :birthday, :Date, null:false
    change_column :users, :gender, :string, null:false
    change_column :users, :gollygmail, :string, null:false
  end
end
