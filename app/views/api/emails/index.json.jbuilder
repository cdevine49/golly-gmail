# json.meta do
#   json.total_pages @emails.total_pages
#   json.query params[:query]
#   json.page @emails.current_page
# end

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
