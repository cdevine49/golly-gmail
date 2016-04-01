class ChangeTables < ActiveRecord::Migration
  def change
    drop_table :email_chains
    add_column :emails, :subject, :text
    remove_column :emails, :email_to_chain_id, :integer
  end
end
