import User from "../modules/user";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  // res.send('User register succesfully')
  try {
    const { email, password } = req.body;

    //verifico si el email ya existe
    const userFound = await User.findOne({ email });
    // si el usuario ya existe
    if (userFound)
      return res
        .status(400)
        .json({ message: "A user with this email already exists" });
    // si no existe crea el usuario
    let createUser = new User(req.body);
//encriptar la contraseña
    const SALT_ROUND = 10;
    createUser.password = await bcrypt.hash(password, SALT_ROUND);

    await createUser.save();

    // mando una respuesta al usuario que fue creado y tb mando al frontend nombre de usuario y el id
    res.status(201).json({
      message: "User created succesfully",
      userName: createUser.name,
      uid: createUser._id,
      //token
    });
  } catch {
    res.status(400).json({ message: "user registration failed" });
  }
};
const login = async (req, res) => {
  res.send("login exc");
};

export { register, login };
