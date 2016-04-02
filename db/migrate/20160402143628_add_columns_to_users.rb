class AddColumnsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :gollygmail, :string
    add_column :users, :birthday, :datetime
    add_column :users, :gender, :string
    add_column :users, :secondary_email, :string
  end
end
