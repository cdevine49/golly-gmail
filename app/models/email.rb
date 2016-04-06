class Email < ActiveRecord::Base
  validates :to, presence: true

  include PgSearch
  pg_search_scope :search_emails,
                  :against => [:subject, :body, :from_name, :from_email, :image_file_name],
                  :order_within_rank => "emails.created_at DESC",
                  :using => { :tsearch => { :prefix => true }}

  belongs_to(
    :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :from
  )

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
