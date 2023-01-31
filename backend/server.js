const express = require('express');
const notes = require("./data/notes");
const dotenv = require('dotenv');

const app = express();
dotenv.config();



app.get('/', (req,res) =>{
    res.send("<h1>API RUNNING......</h1>");
})

app.get('/api/notes', (req,res) =>{
    res.json(notes);
})

app.get('/api/notes/:id', (req,res) =>{
    
    const note = notes.find((n) => n._id === req.params.id)

    res.json(note);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,() =>{
    console.log(`SERVER RUNNING AT PORT ${PORT}`);
})