class JoinsTable < ActiveRecord::Migration
  def change
    create_table :emails_to_chains do |t|
			t.integer :email_id, null: false
			t.integer :chain_id, null: false

      t.timestamps null: false
    end
    add_index :emails_to_chains, :email_id
    add_index :emails_to_chains, :chain_id
    add_column :emails, :email_to_chain_id, :integer
  end
end
