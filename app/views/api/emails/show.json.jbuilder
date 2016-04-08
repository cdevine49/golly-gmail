
json.extract!(
  @email,
  :id, :subject, :body, :to, :from_name,
  :from_email, :created_at, :updated_at,
  :marked, :starred, :important, :read
)

if @email.image.exists?
  json.image_url asset_path(@email.image.url)
end
