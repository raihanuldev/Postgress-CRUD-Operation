-- This is Note For Create A Databse on POSTGRES

CREATE DATABASE bookDB;


CREATE TABLE book (
    id VARCHAR(20) PRIMARY KEY,
    name VARCHAR(20),
    description VARCHAR(250)
);