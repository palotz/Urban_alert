/**
 * Authentication Controller (Basic/Testing)
 * Layer:  Logic
 */
const jwt = require('jsonwebtoken');

exports.SignIn = async (req, res) => {
    try {
        // 1. Define dummy payload for testing
        const payload = {
            email: "email@correo.com",
            password: "Pass123"
        };

        // 2. Create JWT Token using the secret from .env
        // jwt.sign returns the token directly if no callback is provided
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '1h'
        });

        // 3. Send successful response with the generated token
        res.json({
            msg: 'Login successful',
            token: token
        });

    } catch (error) {
        // 4. Handle unexpected errors
        res.status(500).json({
            error: "Error: Could not generate token",
            message: error.message
        });
    }
};
