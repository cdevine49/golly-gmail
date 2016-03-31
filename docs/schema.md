# Schema Information

## email
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
subject     | string    |
body        | text      | not null
to          | string    | not null
from        | string    | not null
mailbox     | integer   | default: 1
archived    | boolean   | not null, default: false
starred     | boolean   | not null, default: false
important   | boolean   | not null, default: false
trashed     | boolean   | not null, default: false

## inbox
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    |

## label
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## emailtype

column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
email_id    | integer   | not null, foreign key
label_id    | integer   | not null, foreign key

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
