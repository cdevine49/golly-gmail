json.meta do
  json.total_pages @emails.total_pages
  json.total_count @emails.total_count
  json.page @emails.current_page
end

json.emails do
  json.array!(@emails) do |email|
    json.extract!(
      email,
      :id, :subject, :body, :to, :from_name,
      :from_email, :created_at, :updated_at,
      :marked, :starred, :important, :read
    )

    if email.image.exists?
      json.image_url asset_path(email.image.url)
    end
  end
end
