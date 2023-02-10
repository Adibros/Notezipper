const mongoose = require('mongoose');

const connectDb = async() =>{
    try{
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.MONGO_URI, {
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