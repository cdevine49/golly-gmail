# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Email.destroy_all

User.create(
  first_name: "Conor",
  last_name: "Devine",
  username: "conor",
  password: "password",
  gollygmail: "conor@gollygmail.com",
  birthday: Date.new(1990,1,1),
  gender: "male",
  secondary_email: "conordevine@yahoo.com"
)

User.create(
  first_name: "Michael",
  last_name: "Drumm",
  username: "drummy",
  password: "password",
  gollygmail: "drummy@gollygmail.com",
  birthday: Date.new(1980,1,1),
  gender: "male",
  secondary_email: "drummy@yahoo.com"
)

User.create(
  first_name: "Simon",
  last_name: "Denis",
  username: "simon",
  password: "password",
  gollygmail: "simon@gollygmail.com",
  birthday: Date.new(1990,1,1),
  gender: "male",
  secondary_email: "simondenis@yahoo.com"
)

User.create(
  first_name: "Brenda",
  last_name: "VanDzura",
  username: "brenda",
  password: "password",
  gollygmail: "brenda@gollygmail.com",
  birthday: Date.new(1980,1,1),
  gender: "female",
  secondary_email: "brendavd@yahoo.com"
)

User.create(
  first_name: "Dane",
  last_name: "S",
  username: "dane",
  password: "password",
  gollygmail: "dane@gollygmail.com",
  birthday: Date.new(1995,1,1),
  gender: "other",
  secondary_email: "danes@yahoo.com"
)



Email.create(
  subject: "The first email seed",
  body: "what subject says",
  to: "conor@gollygmail.com",
  from: "lily@gollygmail.com",

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
