json.array!(@mailboxes) do |mailbox|
  json.extract!(
    mailbox,
    :id, :subject, :body, :to, :from, :created_at, :updated_at
  )
end
