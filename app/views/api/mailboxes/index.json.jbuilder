json.array!(@mailboxes) do |mailbox|
  json.extract!(
    mailbox,
    :id, :name, :created_at, :updated_at
  )
end
