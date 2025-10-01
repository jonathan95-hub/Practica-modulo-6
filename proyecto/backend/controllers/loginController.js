const userModel = require("../models/userModels");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/token")

const signUp = async (req, res) => {
  try {
    const { name, email, password, role, city, numberPhone } = req.body; // hacemos un destructuring del req.body

    const newUser = { // creamos un objeto con los campos que ha de tener el usuario
      name,
      email,
      password: await bcrypt.hash(password, 10), // esto es para encriptar la contraseña
      role,
      city,
      numberPhone
    };
    await userModel.create(newUser); // al create le pasamos el objeto new user
    res.status(200).send({ newUser,  status: "Succes", message: "Created User" });
  } catch (error) {
    if (error.code === 11000) { // Este error dice que el email ya esta en uso
      return res
        .status(500)
        .send({ status: "ERROR", message: "The email is registered" });
    }
    res.status(500).send({ status: "Failed", error: error.message });
  }
};

const loginUser = async(req, res) => {
    try {
        const {email, password} = req.body;
        const user = await userModel.findOne({email: email})
        if(!user){
            return res.status(404).send("Invalid email or password")
        }
        const validate = await bcrypt.compare(password, user.password)
        if(!validate){
            return res.status(404).send("Invalid email or password")
        }
        const payload = {
            _id: user._id,
            name: user.name,
            role: user.role
        }
        const token = generateToken(payload,false)
        const token_refresh = generateToken(payload, true)
        res.status(200).send({status: 'Success', message: 'validated user', user, token, token_refresh})
        
    } catch (error) {
          res.status(500).send({ status: "Failed", error: error.message });
    }
}

module.exports = { signUp, loginUser };
