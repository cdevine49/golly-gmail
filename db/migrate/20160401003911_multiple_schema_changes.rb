class MultipleSchemaChanges < ActiveRecord::Migration
  def change
    create_table :email_chains do |t|
			t.string :subject
			t.boolean :read, default: false
      t.integer :email_to_chain_id, null: false

      t.timestamps null: false
    end

    remove_column :emails, :subject, :string
    remove_column :emails, :checked, :integer
    remove_column :emails, :starred, :integer
    remove_column :emails, :important, :integer

    add_index :email_chains, :email_to_chain_id
  end
end
