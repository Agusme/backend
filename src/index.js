import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import './database';
import router from "./routes/products.routes";

//console.log("desde mi backend")
//creo la instancia de Express

const app = express();
//configuro el puerto por donde esto va a funcionar
app.set("port", process.env.PORT || 5000);

app.listen(app.get('port'), ()=>(
    console.log('estoy en el puerto' + app.get('port'))
))

//middleware
app.use(morgan('dev')) // nos da info de la consulta: tipo, status, tiempo de ejecucion

app.use(cors()) // nos permite recibir peticiones remotas a nuestra api
app.use(express.json())
app.use(express.urlencoded({extended: true})) // estos 2 ultimos nos permiten reccibir e interpretar el json de la request
//app.use(express.static('public'));
app.use(express.static(path.join(__dirname,'../public')))



// rutas de prueba
app.use('/v1', router)

/* app.get('/', (req, res)=>{
    res.send('Esto es una preuba de mi backend')
}) */
app.delete('/borrarProducto', (req, res)=>{
    res.send('Se borro el producto')
})
