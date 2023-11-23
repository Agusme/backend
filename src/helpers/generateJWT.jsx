import jwt from "jsonwebtoken";

const generateJWT = (uid, userName, role) => {
  // devolver una promesa
  return new Promise((resolve, reject) => {
    //agregar los datos del payload para generar el token
    const payload = { uid, userName, role };
    jwt.sign(
      payload,
      process.env.SECRET_JWT,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          console.log(err), reject("error generating token");
        }
        resolve(token);
      }
    );
  });
};


export default generateJWT;