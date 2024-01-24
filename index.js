const express = require('express');
const app = express();

const PORT = 4770;

app.listen(PORT,()=>{
    console.log("server is running")
})

// GET ALL BOOKS
app.get('/books', async(req,res)=>{
    try {
        res.status(200).json({message: "book paisi"})
    } catch (error) {
        res.json({error: error.message})
    }
})

// GET A Specific Book
app.get('/books/:id',async(req,res)=>{
    try {
        const id = req.params;
        console.log(id)
        res.status(200).json(`book paisi id:`)
    } catch (error) {
        res.json({error: error.message})
    }
})

// PLAN

/**
 * GET /books => return all books
 * GET /books/:id => return a specific book
 * POST /books =>create a book
 * DELETE /books/:id => delete a book
 * PUT /books/:id => Update a book
 * */ 