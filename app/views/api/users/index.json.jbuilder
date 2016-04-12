json.users do
  json.array!(@users) do |user|
    json.extract!(
      user,
      :username
    )
  end
end
