class Mailbox < ActiveRecord::Migration
  def change
    create_table :mailboxes do |t|
      t.string :name, null: false
      t.text :body, null: false

      t.timestamps null: false
    end

  end
end
