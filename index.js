const express = require('express');
const { v4: uuidv4 } = require('uuid');
const pool = require('./db');

const app = express();

const PORT = 4770;
// middleware
app.use(express.json());


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

// Create : POst Book
app.post('/books',async(req,res)=>{
    try {
        const {name,description} = req.body;
        const id = uuidv4();
        // Post on the database 
        const newBook = await pool.query(
            "INSERT INTO book (id,name,description) VALUES ($1,$2,$3) RETURNING *",
            [id,name,description]
        )
        res.status(201).json({data: newBook.rows})
    } catch (error) {
        res.json({error: error.message})
    }
})

// delete a books
app.delete('/books/:id',async(req,res)=>{
    try {
        const id = req.params;
        res.status(200).json('Deleted')
        
    } catch (error) {
        res.json({error: error.message})
    }
})
// Update
app.put('/books/:id',async(req,res)=>{
    try {
        const id = req.params;
        const {name,description} = req.body;
        res.status(200).json(`Book data Updated ${name} `)
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