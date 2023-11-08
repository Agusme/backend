import mongoose from "mongoose";

const url = 'mongodb://127.0.0.1:27017/crudBurgers65i'
mongoose.connect(url);

const conection = mongoose.connection;
conection.once('open',()=>{
    console.log("BD conectada")
})