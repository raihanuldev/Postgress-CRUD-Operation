-- This is Note For Create A Databse on POSTGRES

CREATE DATABASE bookDB;


CREATE TABLE book (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(20),
    description VARCHAR(250)
);

-- Post a Book API
INSERT INTO book (id,name,description)
VALUES (101,"HELLO","THIS  NICHE BOOK");