# FresherNote

[Heroku link][http://gollygmail.herokuapp.com/]

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

gollygmail is a gmail clone built using Ruby on Rails and React
It allows users to:

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Send / Receive emails
- [ ] Mark emails as Read / Unread
- [ ] Archive / Delete / Recover emails
- [ ] Label notes with multiple labels
- [ ] Star emails to mark as important / special
- [ ] Users can configure inbox based on labels and stars
- [ ] Search through emails


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [ ] create `User` model
- [ ] create `Sessions` controller
- [ ] authentication
- [ ] functional user signup/sign in pages
- [ ] On sing in, users can sign out

### Phase 2:  Mailer, API, and basic APIUtil (1.5 days)

**Objective:** Emails can be created, read, edited and destroyed

- [ ] create `Email` mailer
- [ ] seed the database
- [ ] CRUD API for emails
- [ ] jBuilder views for emails
- [ ] setup `APIUtil` to interact with the API

### Phase 3: Flux Architecture and Router (1.5 days)

**Objective:** Basic inbox set up

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each inbox component, building out the flux loop as needed
  - [ ] `EmailIndex`
  - [ ] `EmailPreview`
  - [ ] `EmailForm`
- [ ] Email form sends emails
- [ ] Received emails are added to the inbox as previews
- [ ] Previews can be clicked on to view in full

### Phase 4: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: EmailIndex Extension (1 day)

**Objective:** Emails belong to one or more subindexes, and can be viewed accordingly.

- [ ] Emails default to inbox, outbox, spam, or trash based on to: line
- [ ] Emails can be marked as important and/or starred
- [ ] Index View is dependent on selected attributes
  - [ ] Inbox/Outbox CRUD
  - [ ] emails are added to folder based on being sent or received
  - [ ] emails can be moved to different folders where appropriate
- Use CSS to style new views

### Phase 6: Labels (2 days)

**Objective:** Emails can have labels and be searched for and filtered by labels.

- [ ] create `Label` polymorphic joins table
- build out API, Flux loop, and components for:
  - [ ] fetching labels for email
  - [ ] adding labels to emails
  - [ ] creating labels
  - [ ] searching and filtering emails by label

### Phase 7: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and clean.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Add contacts and contact subgroups
- [ ] Allow users to configure inbox
- [ ] Add calendar and tasks

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
