const Usuario = require('../models/Usuarios');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');

exports.getAllUsers = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({error: "Error: Get Reports", message: error});
    }
}



exports.registerUsuario = async (req, res) => {
    try{
        const { email, password } = req.body;
        const usuario = await Usuario.findOne({email});
        if (usuario) {
            return res.status (401).json({ msg: "El usuario ya existe" });
        }
        const salt= await bcrypt.genSalt(10);
        const newPassword = await bcrypt.hash(password, salt);

        const nuevoUsuario = new Usuario({
            email, 
            password: newPassword
        });
        
        await nuevoUsuario.save();
        res. status(201).json(nuevoUsuario);
        }catch (error) {
            return res.status (401).json({ msg: "Error: Create usuario", message: error });
            }
        }
        
exports.loginUsuario = async (req , res) => {
    try {
       const { email, password } = req.body;
       // verfiacr correo
        const usuario = await Usuario. findOne({email});
        if (!Usuario) { return res.status (400).Json({ msg: "usuario no existe. Credencil invalida "});}
        // verificar contraseña
        const isMatch = await bcrypt.compare(password, usuario.password);
        if(!isMatch) return res.status(400).json({  msg: "La contraseña no es correcta. Credencil invalida "});
        // payload
        const payload = {usuario:{id: usuario.id, email: usuario.email}};
        //Firmar JWT
        jwt.sign(
            payload,
            process.env.JWT_SECRET,{expiresIn:'1h'},
            (error, token) =>{//callback en caso de error
                if (error) throw error;
                res.json({token});
            }
        )

        
    } catch (error) {
        return res.status (500).json({ msg: "Error: Error en el servidor",  message: error });
    }
}

//create a registeredUsuario
// valify if the user already exists
//findOne({email})
//send error message if the user exists

//Encrypt password
//use the middleware function

//save user in DB
//send response

