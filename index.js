const express = require('express');
const app = express();

const PORT = 4770;

app.listen(PORT,()=>{
    console.log("server is running")
})



// PLAN

/**
 * GET /books => return all books
 * GET /books/:id => return a specific book
 * POST /books =>create a book
 * DELETE /books/:id => delete a book
 * PUT /books/:id => Update a book
 * */ 