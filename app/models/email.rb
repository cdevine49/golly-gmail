class Email < ActiveRecord::Base
  validates :to, presence: true

  include PgSearch
  multisearchable :against => [:subject, :body, :from_name, :from_email, :image_file_name]

  belongs_to(
    :user,
    class_name: 'User',
    primary_key: :id,
    foreign_key: :from
  )

  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
