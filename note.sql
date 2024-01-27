-- This is Note For Create A Databse on POSTGRES

CREATE DATABASE bookDB;

-- Create a Table 

CREATE TABLE book (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(20),
    description VARCHAR(250)
);

-- Post a Book API
INSERT INTO book (id,name,description)
VALUES (101,"HELLO","THIS  NICHE BOOK");

-- Read Collection 
SELECT * FROM book;

-- GET Specific Book
"SELECT * FROM book WHERE id=$1",[id]

-- delete Specific book
"DELETE FROM book WHERE id=$1",[id]

-- Update Book
"UPDATE book SET name=$1,description=$2 WHERE id=$3 RETURNING *",[name,description,id]