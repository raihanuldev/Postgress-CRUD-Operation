# PostgreSQL-CRUD OPERATION
PostgreSQL, often referred to as "Postgres," is a powerful open-source relational database management system (RDBMS). It is known for its reliability, extensibility, and compliance with SQL standards


## Create Database 
```mysql
-- Create database ; write it on CMd

CREATE DATABASE usersDB;

-- create a Table
CREATE TABLE book (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(20),
    role VARCHAR(20),
    description VARCHAR(250)
);

```

## GET ALL BOOK FROM book Collection

```javascript
app.get('/books', async(req,res)=>{
    try {
        const books = await pool.query("SELECT * FROM book")
        res.status(200).json({message: "data recived",data:books.rows})
    } catch (error) {
        res.json({error: error.message})
    }
})
```
## Get Specific Book by Id
```javascript
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

```
## delete specific Book by id
```javascript
app.delete('/books/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const book = await pool.query("DELETE FROM book WHERE id=$1",[id])
        res.status(200).json({text:'Deleted'})
        
    } catch (error) {
        res.json({error: error.message})
    }
})
```
## Update Book 
```javascript
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
```
## POST Book on book Collection
```javascript
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
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)




