class AddAttachmentImageToEmails < ActiveRecord::Migration
  def self.up
    change_table :emails do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :emails, :image
  end
end
