import { check } from "express-validator";
import validatinresults from "../helpers/validationResults";

const productValidation = [
  check("productName")
    .notEmpty()
    .withMessage("el nombre del product es requerido")
    .isLength({ min: 2, max: 100 })
    .withMessage("El nombre del producto debe tenerr entre 2 a 100 caracteres"),
  check("price")
    .notEmpty()
    .withMessage("El precio es obligatorio")
    .custom((value) => {
      if (value >= 0 && value <= 100) {
        return true;
      } else {
        throw new Error("El precio deve estar en tre 0 y 1000");
      }
    }),

  (req, res, next) => {
    validatinresults(req, res, next);
  },
];

export default productValidation;
