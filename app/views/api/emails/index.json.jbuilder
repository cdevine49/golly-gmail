json.array!(@emails) do |email|
  json.extract!(
    email,
    :id, :subject, :body, :to, :from_name, :from_email, :created_at, :updated_at
  )
end
