# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Email.destroy_all

User.create(username: "Conor", password: "password")
User.create(username: "Fred", password: "password")
User.create(username: "Tommy", password: "password")
User.create(username: "Lily", password: "password")
User.create(username: "Leen", password: "password")

Email.create(
  subject: "The first email seed",
  body: "what subject says",
  to: 2,
  from: 1
)

Email.create(
  subject: "I hope this works",
  body: "it probably wont though",
  to: 1,
  from: 3
)

Email.create(
  subject: "Another test email",
  body: "at this point, Im running out of ideas",
  to: 4,
  from: 2
)

Email.create(
  subject: "Cant stop me now",
  body: "Im having such a good time",
  to: 2,
  from: 2
)

Email.create(
  subject: "Where do we go?",
  body: "where do we go now?",
  to: 1,
  from: 2,
)
