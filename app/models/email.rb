class Email < ActiveRecord::Base
  validates :to, presence: true, :if => :sent

  def self.starred
    @emails = Email
    .where("(emails.to = ? AND emails.received = ?) OR (emails.from_email = ? AND emails.received = ?)", current_user.gollygmail, true, current_user.gollygmail, false)
    .where(starred: true)
  end

  def self.important
    @emails = Email
    .where("(emails.to = ? AND emails.received = ?) OR (emails.from_email = ? AND emails.received = ?)", current_user.gollygmail, true, current_user.gollygmail, false)
    .where(important: true)
  end

  def self.outbox
    @emails = Email
    .where("emails.from_email = ? AND emails.sent = ? AND emails.received = ?", current_user.gollygmail, true, false)
  end

  def self.search_results
    @emails = Email
    .where("(emails.to = ? AND emails.received = ?) OR emails.from_email = ?", current_user.gollygmail, true, current_user.gollygmail)
    .search_emails(params[:query])
  end

  def self.drafts
    @emails = Email
    .where("emails.from_email = ?", current_user.gollygmail)
    .where("emails.sent = ?", false)
  end

  def self.inbox
    @emails = Email
    .where("emails.to = ?", current_user.gollygmail)
    .where("received = ?", true)
  end

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
