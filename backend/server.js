const express = require('express');
const notes = require("./data/notes");
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const path = require('path');


const app = express();
dotenv.config();
connectDb();
app.use(express.json());






app.use('/api/notes',noteRoutes);

app.use('/api/users',userRoutes);

// deployment code
__dirname = path.resolve();
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/frontend/build")));

    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
    })
}else{
    app.get('/', (req,res) =>{
        res.send("<h1>API RUNNING......</h1>");
    })
}

// -----
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(5000,() =>{
    console.log(`SERVER RUNNING AT PORT 5000`);
});