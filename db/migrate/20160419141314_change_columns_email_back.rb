class ChangeColumnsEmailBack < ActiveRecord::Migration
  def change
    change_column :emails, :to, :string, :null => false

  end
end
