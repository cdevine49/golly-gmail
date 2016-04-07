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
  secondary_email: "danes@hotmail.com"
)



(1..200).each do |i|
   a = Email.new(subject: "a email", body: '')
   b = Email.new(subject: "b email", body: "This is a seed email")
   if i % 2 == 0
     a.from_email = "brenda@gollygmail.com"
     a.from_name = "brenda"
     a.to = "conor@gollygmail.com"
     b.from_email = "conor@gollygmail.com"
     b.from_name = "conor"
     b.to = "drummy@gollygmail.com"
    if i % 6 == 0
      a.starred = true
      b.important = true unless i % 40 == 0
    end

    if i % 10 == 0
      a.important = true
    end

    if i % 8 == 0
      b.important = true
      b.starred = true
    end
  elsif i % 5 == 0
    a.from_email = "drummy@gollygmail.com"
    a.from_name = "drummy"
    a.to = "conor@gollygmail.com"
    a.body = "Lets do this now"
    b.from_email = "conor@gollygmail.com"
    b.from_name = "conor"
    b.to = "drummy@gollygmail.com"
  elsif i % 3 || i % 7 === 0
    a.from_email = "simon@gollygmail.com"
    a.from_name = "simon"
    a.to = "dane@gollygmail.com"
    a.starred = true unless i % 21 == 0
  else
    a.from_email = "conor@gollygmail.com"
    a.from_name = "conor"
    a.to = "brenda@gollygmail.com"
    a.important = true
    b.from_email = "drummy@gollygmail.com"
    b.from_name = "drummy"
    b.to = "conor@gollygmail.com"
   end
   a.save
   b.save
end
