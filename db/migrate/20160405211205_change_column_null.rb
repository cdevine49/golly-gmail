class ChangeColumnNull < ActiveRecord::Migration
  def change
    change_column_null :emails, :body, true
  end
end
