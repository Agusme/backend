import { validationResult } from "express-validator";
import Product from "../modules/product";

/* const productController ={}

productController.showProduct = (req, res)=>{
  
    res.send("listar productos")
}

export default productController

 */
const showProduct = async (req, res) => {
  // res.send('listar productos')
  try {
    //recuperar el arreglo con los productos de la bd
    const productList = await Product.find();
    res.status(200).json(productList);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: "Error al buscar los productos" + error });
  }
};

const createProduct = async (req, res) => {
  //res.send("se creo el producto")
  const { productName, price, urlImage, category } = req.body;

  try {
    //  console.log(req.body)
    //pasos: 1 validar, 2 crear un objeto para guardar en la bd 3 guardar en la bd

    //paso 1 validar
  /*   const result = validationResult(req);
    if (!result.isEmpty()) {
      res.status(400).json({
        error: result.array(),
      });
    } */

    const newProduct = new Product({
      /*  productName: req.body.productName,
    price: req.body.price,
    urlImage:  req.body.urlImage,
    category:req.body.category */

      productName,
      price,
      urlImage,
      category,
    });
    await newProduct.save();
    res.status(201).json({
      message: "product created succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Error al crear el producto" + error });
  }
};

const getOne = async (req, res) => {
  // res.send("se obtiene el producto")
  try {
    console.log(req.params.id);
    const { id } = req.params;
    const productFound = await Product.findById(id);
    res.status(200).json(productFound);
  } catch (error) {
    res.status(404).json({ message: "Error al buscar el producto" });
  }
};
const updateProduct = async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Producto actualizado" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error al actualizar el producto", error: error });
  }
};
const deleteProduct = async (req, res) => {
  try {
    await Product.findOneAndDelete(req.params.id);
    res.status(200).json({ message: "se borro satisafactoriamente" });
  } catch (error) {
    res.status(400).json({ message: "error al eliminar" });
  }

  res.send("se elimino el producto");
};

export { showProduct, createProduct, getOne, updateProduct, deleteProduct };
