const mongoose = require('mongoose');

const connectDb = async() =>{
    try{
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect('mongodb+srv://adi123:narsimulu1@cluster0.ehycxqj.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });

        console.log(`MongoDb connected ${conn.connection.host}`)
    }
    catch(err){
        console.error(`Error : ${err.message}`);
        process.exit();
    }
}

module.exports = connectDb;