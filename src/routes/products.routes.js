import { Router } from "express";
import { createProduct, deleteProduct, getOne, showProduct, updateProduct } from "../controllers/products.controllers";
import productValidation from "../middlewares/productValidation";
import validateJWT from "../middlewares/validateJWT";
//import productController from "../controllers/products.controllers";
//crear la intancia de router
const router = Router();

/* 

router.get('/', (req, res)=>{
    res.send('Esto es una preuba de mi backend')
}) */
router
  .route("/products/")
  .get(showProduct)
  .post([validateJWT, productValidation], createProduct)

router
.route('/products/:id')
.get(getOne)
.put(validateJWT, updateProduct)
.delete(validateJWT, deleteProduct)

export default router;