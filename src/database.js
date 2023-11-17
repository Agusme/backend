import mongoose from "mongoose";
import 'dotenv/config' 
//const url = 'mongodb://127.0.0.1:27017/crudBurgers65i'
const URI = process.env.MONGODB_URI
mongoose.connect(URI);

const conection = mongoose.connection;
conection.once('open',()=>{
    console.log("BD conectada")
})
