class EmailMailer < ApplicationMailer
  def send_email(email)
    @email = email
    mail(
      to: email.to,
      from: email.from_email,
      subject: email.subject
      ) do |format|
        format.html { render html: email.body}
        format.text { render text: email.body}
      end
  end
end
