class Mailbox < ActiveRecord::Base
  has_many(
    :emails,
    class_name: 'Email',
    primary_key: :id,
    foreign_key: :mailbox_id
  )
end
