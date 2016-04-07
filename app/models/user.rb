class User < ActiveRecord::Base
	attr_reader :password

	after_initialize :ensure_session_token

	validates :username, :password_digest, :session_token, presence: true
	validates :password, length: { minimum: 6, allow_nil: true }
	validates :session_token, :username, uniqueness: true
	# validates :password_matches_confirmation

	has_many(
		:emails,
		class_name: "Email",
		primary_key: :id,
		foreign_key: :from
	)

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username) || User.find_by(gollygmail: username)
		user.try(:is_password?, password) ? user : nil
	end

	def self.find_by_auth_hash(auth_hash)
		provider = auth_hash[:provider]
		uid = auth_hash[:uid]

		user = User.find_by(provider: provider, uid: uid)
	end

	def sign_up_with_auth_hash(auth_hash)
		
	end

	def update_with_auth_hash(auth_hash)
		currentUser.update(provider: provider, uid: uid)
	end

	def self.generate_session_token
		code = SecureRandom::urlsafe_base64(16)
		while exists?(session_token: code)
			code = SecureRandom::urlsafe_base64(16)
		end
		code
	end

	def is_password?(unencrypted_password)
		BCrypt::Password.new(self.password_digest).is_password?(unencrypted_password)
	end

	def password=(unencrypted_password)
		if unencrypted_password.present?
			@password = unencrypted_password
			self.password_digest = BCrypt::Password.create(unencrypted_password)
		end
	end

	def reset_session_token!
		self.session_token = self.class.generate_session_token
		self.save!
		self.session_token
	end

	private

	def ensure_session_token
		self.session_token ||= self.class.generate_session_token
	end

	# def password_matches_confirmation
	#
	# end
end
