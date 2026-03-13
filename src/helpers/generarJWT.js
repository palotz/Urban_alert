/* Layer: Logic 
 * * This helper centralizes the token creation logic to keep controllers clean
 * and ensure consistent security settings across the app.
 */
const jwt = require('jsonwebtoken');
// We sign the token using the secret key from the CONFIG layer (.env)
// The token payload contains the user ID to identify them in future requests.
// Function to create the token
const generarToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
};

module.exports = {
    generarToken

};

