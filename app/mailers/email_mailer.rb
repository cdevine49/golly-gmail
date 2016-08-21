class EmailMailer < ApplicationMailer
  def send_email(email)
    @email = email
    mail(
      to: email.to,
      from: 'conorjdevine@gmail.com',
      subject: email.subject,
      body:   email.body
      ) do |format|
        format.text { render 'email.text.erb'}
        format.html { render 'email.html.erb'}
      end
  end
end
