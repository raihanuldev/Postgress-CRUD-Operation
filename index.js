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
        const books = await pool.query("SELECT * FROM book")
        res.status(200).json({message: "book paisi",data:books.rows})
    } catch (error) {
        res.json({error: error.message})
    }
})

// GET A Specific Book
app.get('/books/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        // console.log(id)
        const book = await pool.query("SELECT * FROM book WHERE id=$1",[id])
        res.status(200).json({text:"book paisi", data:book.rows})
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
        const {id} = req.params;
        const book = await pool.query("DELETE FROM book WHERE id=$1",[id])
        res.status(200).json({text:'Deleted'})
        
    } catch (error) {
        res.json({error: error.message})
    }
})
// Update
app.put('/books/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const {name,description} = req.body;
        const updatedBook = await pool.query("UPDATE book SET name=$1,description=$2 WHERE id=$3 RETURNING *",[name,description,id])
        res.status(200).json({text: 'Book data Updated',data:updatedBook.rows})
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