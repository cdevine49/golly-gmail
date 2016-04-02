# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Email.destroy_all

User.create(username: "conor", password: "password")
User.create(username: "fred", password: "password")
User.create(username: "tommy", password: "password")
User.create(username: "lily", password: "password")
User.create(username: "leen", password: "password")

Email.create(
  subject: "The first email seed",
  body: "what subject says",
  to: "conor@gollygmail.com",
  from: "lily@gollygmail.com"
)

Email.create(
  subject: "I hope this works",
  body: "it probably wont though",
  to: "tommy@gollygmail.com",
  from: "conor@gollygmail.com"
)

Email.create(
  subject: "Another test email",
  body: "at this point, Im running out of ideas",
  to: "leen@gollygmail.com",
  from: "tommy@gollygmail.com"
)

Email.create(
  subject: "Cant stop me now",
  body: "Im having such a good time",
  to: "lily@gollygmail.com",
  from: "fred@gollygmail.com"

)

Email.create(
  subject: "Where do we go?",
  body: "where do we go now?",
  to: "fred@gollygmail.com",
  from: "lily@gollygmail.com"

)
