const express = require('express');
const notes = require("./data/notes");
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');


const app = express();
dotenv.config();
connectDb();
app.use(express.json());




app.get('/', (req,res) =>{
    res.send("<h1>API RUNNING......</h1>");
})

app.get('/api/notes', (req,res) =>{
    res.json(notes);
})

app.use('/api/users',userRoutes);

app.get('/api/notes/:id', (req,res) =>{
    
    const note = notes.find((n) => n._id === req.params.id)

    res.json(note);
})

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(5000,() =>{
    console.log(`SERVER RUNNING AT PORT 5000`);
})