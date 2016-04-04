class UpdateEmailTable < ActiveRecord::Migration
  def change
    rename_column :emails, :from, :from_name
    add_column :emails, :from_email, :string, null: false
  end
end
