import mongoose from "mongoose";
import 'dotenv/config' 
//url de desarrollo
const url = 'mongodb://127.0.0.1:27017/crudBurgers65i'
//url de produccion
//const URI = process.env.MONGODB_URI
mongoose.connect(url)
//mongoose.connect(URI);

const conection = mongoose.connection;
conection.once('open',()=>{
    console.log("BD conectada")
})
