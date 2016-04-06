class AddNullFalseToEmailSubject < ActiveRecord::Migration
  def change
    change_column :emails, :subject, :string, null: false
  end
end
