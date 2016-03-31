class Email < ActiveRecord::Base
  belongs_to(
    :mailbox,
    class_name: 'Mailbox',
    primary_key: :id,
    foreign_key: :mailbox_id
  )
end
