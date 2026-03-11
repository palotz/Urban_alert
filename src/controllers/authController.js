const jwt = require('jsonwebtoken');

exports.SignIn = async (req, res) => {
    try {
        //1. Definimos el payload 
        const payload = {
            email: "email@correo.com",
            password: "Pass123"
        };

        //2. Creamos el token 
        //Nota: jwt.sign sin callback devuelve el token directamente
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        //3. Enviamos la respuestacomo archivo json
        res.json({
            msg: 'Login exitoso',
            token: token
        });

    } catch (error) {
        // 4. Manejo en caso errores
        res.status(500).json({
            error: "Error: create user data",
            message: error.message
        });
    }
};