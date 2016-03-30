json.array!(@emails) do |email|
  json.extract!(
    email,
    :id, :subject, :body, :to, :from, :created_at, :updated_at
  )
end
