-- command to run the script in terminal
-- 🔻 use this command if your terminal is already in the dev_tools directory
-- psql -U postgres -a -f remake_database.sql
-- or
-- 🔻 use this command if your terminal is pointing at the root directory of your project
-- psql -U postgres -a -f data/dev_tools/remake_database.sql

CREATE ROLE spencer
WITH
  LOGIN
  PASSWORD 'password'
  CREATEDB
  NOSUPERUSER
  NOCREATEROLE
;

CREATE DATABASE oscars
  WITH
  OWNER = spencer
  ENCODING = 'UTF8'
  CONNECTION LIMIT = -1
;
