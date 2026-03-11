const jwt = require('jsonwebtoken');

// Función para crear el token
const generarToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
};

module.exports = {
    generarToken
};