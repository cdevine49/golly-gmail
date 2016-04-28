# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
User.destroy_all
Email.destroy_all

User.create!(
  first_name: "Conor",
  last_name: "Devine",
  username: "conord",
  password: "password",
  gollygmail: "conord@gollygmail.com",
  birthday: Date.new(1990,1,1),
  gender: "male",
  secondary_email: "conordevine@yahoo.com"
)

User.create!(
  first_name: "Michael",
  last_name: "Drumm",
  username: "drummy",
  password: "password",
  gollygmail: "drummy@gollygmail.com",
  birthday: Date.new(1980,1,1),
  gender: "male",
  secondary_email: "drummy@yahoo.com"
)

User.create!(
  first_name: "Simon",
  last_name: "Denis",
  username: "simond",
  password: "password",
  gollygmail: "simond@gollygmail.com",
  birthday: Date.new(1990,1,1),
  gender: "male",
)

User.create!(
  first_name: "Brenda",
  last_name: "VanDzura",
  username: "brenda",
  password: "password",
  gollygmail: "brenda@gollygmail.com",
  birthday: Date.new(1980,1,1),
  gender: "female",
  secondary_email: "brendavd@yahoo.com"
)

User.create!(
  first_name: "Dane",
  last_name: "S",
  username: "danesr",
  password: "password",
  gollygmail: "danesr@gollygmail.com",
  birthday: Date.new(1995,1,1),
  gender: "other",
  secondary_email: "dane@hotmail.com"
)



(1..200).each do |i|
   a = Email.new(subject: "Hey, how are you?", body: '')
   e = Email.new(subject: "I'm going out tomorrow", body: 'You should come')
   f = Email.new(subject: "How 'bout those mets?'", body: 'You think they have a shot this year?')
   b = Email.new(subject: "What's going on?", body: "Just checking in")
   c = Email.new(subject: "", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
   d = Email.new(subject: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
   if i % 2 == 0
     a.from_email = "simond@gollygmail.com"
     a.from_name = "Simon Denis"
     a.to = "conord@gollygmail.com"
     a.body = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
     b.from_email = "conord@gollygmail.com"
     b.from_name = "Conor Devine"
     b.to = "drummy@gollygmail.com"
     c.from_email = "conord@gollygmail.com"
     c.from_name = "Conor Devine"
     c.to = "brenda@gollygmail.com"
     d.from_email = "danesr@gollygmail.com"
     d.from_name = "Dane S"
     d.to = "drummy@gollygmail.com"
     e.from_email = "brenda@gollygmail.com"
     e.from_name = "Brenda VanDzuras"
     e.to = "conord@gollygmail.com"
     f.from_email = "danesr@gollygmail.com"
     f.from_name = "Dane S"
     f.to = "conord@gollygmail.com"

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
    a.from_name = "Michael Drumm"
    a.to = "conord@gollygmail.com"
    a.body = "Lets try this another way"
    b.from_email = "conord@gollygmail.com"
    b.from_name = "Conor Devine"
    b.to = "drummy@gollygmail.com"
  elsif i % 3 || i % 7 === 0
    a.from_email = "simond@gollygmail.com"
    a.from_name = "Simon Denis"
    a.to = "danesr@gollygmail.com"
    a.starred = true unless i % 21 == 0
  else
    a.from_email = "conord@gollygmail.com"
    a.from_name = "Conor Devine"
    a.to = "brenda@gollygmail.com"
    a.important = true
    b.from_email = "drummy@gollygmail.com"
    b.from_name = "Michael Drumm"
    b.to = "conord@gollygmail.com"
   end
   [a, b, c, d, e, f].each do |email|
     email.sent = true
   end
   a.save
   b.save
   c.save
   d.save
   [a, b, c, d, e ,f].each do |email|
     email.received = true
   end
   a.save
   b.save
   c.save
   d.save
end
