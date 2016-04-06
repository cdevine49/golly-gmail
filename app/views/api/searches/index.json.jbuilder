json.meta do
  json.query params[:query]
end

json.search_results do
  json.array!(@search_results) do |search_result|
    case search_result
    # when Contact
      # json.partial! "api/contacts/contact", author: search_result
      # json._type "Contact"
    when Email
      json.extract!(
        search_result,
        :id, :subject, :body, :to, :from_name,
        :from_email, :created_at, :updated_at,
        :marked, :starred, :important, :read
      )

      if search_result.image.exists?
        json.image_url asset_path(search_result.image.url)
      end
    end
    json._type search_result.class.to_s

    # # Metaprogramming for general case
    # tableized = search_result.class.to_s.tableize
    # json.partial!(
    #   "api/#{tableized}/#{tableized.singularize}",
    #   tableized.singularize.to_sym => search_result
    # )
  end
end
