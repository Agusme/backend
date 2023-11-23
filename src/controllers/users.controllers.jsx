import generateJWT from "../helpers/generateJWT";
import User from "../modules/user";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  // res.send('User register succesfully')
  try {
    const { email, password, role } = req.body;

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
    //generar token
    const token = await generateJWT(
      createUser._id,
      createUser.name,
      createUser.role
    );

    //guardar en la bd
    await createUser.save();

    // mando una respuesta al usuario que fue creado y tb mando al frontend nombre de usuario y el id
    res.status(201).json({
      message: "User created succesfully",
      userName: createUser.name,
      role: createUser.role,
      uid: createUser._id,
      token,
      //token
    });
  } catch {
    res.status(400).json({ message: "user registration failed" });
  }
};
const login = async (req, res) => {
  //res.send("login exc");
  try {
    const { email, password } = req.body;
    //verificar si el email existe
    const user = await User.findOne({ email });
    if (!user) res
        .status(404)
        .json({ message: "User email or passaword incorrect - email" });
    //confirmar si el password enviado es valido
    const correctPassword = bcrypt.compareSync(password, user.password);

    if (!correctPassword)
      res
        .status(404)
        .json({ message: "user email o password incorrect- password" });


        //generar el token
        const token = await generateJWT(user._id, user.name, user.role);

        // si son correecto
    res.status(200).json({
      message: "user email and password correct",
      userName: user.name,
      userRole: user.role,
      uid: user._id,
      token
    });
  } catch {
    res.status(400).json({ message: "User Log in failed" });
  }
};

export { register, login };
