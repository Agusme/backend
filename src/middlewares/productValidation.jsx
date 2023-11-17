import { check } from "express-validator";
import validatinresults from "../helpers/validationResults";

const productValidation = [
  check('productName')
    .notEmpty()
    .withMessage('El nombre del producto es requerido')
    .isLength({ min: 2, max: 100 })
    .withMessage('El nombre del producto debe tener entre 2 a 100 caracteres'),
  check('price')
    .notEmpty()
    .withMessage('El precio es obligatorio')
    .custom((value) => {
      if (value >= 0 && value <= 10000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre 0 y 10000");
      }
    }),

  (req, res, next) => {
    validatinresults(req, res, next);
  },
];

export default productValidation;
