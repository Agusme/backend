import mongoose, {Schema} from "mongoose";

const productSchema = new Schema({
    productName:{
        require: true,
        type:String,
        minlenght:2,
        maxlenght:100,
        unique:true,
    },
    price:{
        type: String,
        require: true,
        min:0,
        max: 1000,
    },
    urlImg:{
        type: String,
        require:true,
    },
    category:{
        type: String,
        require:true,
    }
})


const Product = mongoose.model('product', productSchema);

export default Product;