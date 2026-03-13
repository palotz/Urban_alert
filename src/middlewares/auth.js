/**
 * Authentication Middleware
 * Layer: Network
 * * This middleware intercepts incoming requests to protected routes.
 * It verifies if the user has provided a valid JWT in the headers.
 */
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // 1. Extract the token from the "Authorization" header
    // In Postman, this is sent as: Authorization: <your_token>
    const token = req.header('Authorization');

    // 2. Check if the token exists
    if (!token) {
        return res.status(401).json({ 
            msg: 'No token provided, authorization denied' 
        });
    }

    try {
        // 3. Verify the token using the secret key from the CONFIG layer
        // jwt.verify returns the decoded payload if valid
        const cifrado = jwt.verify(token, process.env.JWT_SECRET);
        
        // Log the decoded data for debugging purposes (optional)
        console.log("Authenticated User Data:", cifrado);
        
        // 4. Everything is OK, proceed to the next layer (Controller)
        next(); 

    } catch (error) {
        // 5. If the token is expired, tampered with, or invalid
        res.status(401).json({ 
            msg: 'Token is not valid or has expired' 
        });
    }
};
