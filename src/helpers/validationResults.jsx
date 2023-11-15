import { validationResult } from "express-validator";

const validatinresults =(req, res, next)=>{
    const errores = validationResult(req);

if (!errores.isEmpty()) {
  res.status(400).json({
    errors: errores.array()
  });
}
//le digo que continue con el flujo usando el 
next();
}

export default validatinresults;