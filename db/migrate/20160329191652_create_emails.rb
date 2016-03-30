class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :subject, null: false
      t.text :body, null: false
      t.integer :to, null: false
      t.integer :from, null: false


      t.timestamps null: false
    end

    add_index :emails, :to, name: 'recipient_index'
    add_index :emails, :from, name: 'sender_index'
  end
end
