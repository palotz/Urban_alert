/**
 * User Controller (Auth, Register, Login)
 * Layer: Logic
 */
const Usuario = require('../models/Usuarios');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// GET: Fetches all users (Excluding passwords for security)
exports.getAllUsers = async (req, res) => {
    try {
        const usuarios = await Usuario.find().select('-password');
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ error: "Error: Get Users failed", message: error.message });
    }
}

// POST: Register logic with password encryption
exports.registerUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Verify if user already exists (Stateless check)
        const usuario = await Usuario.findOne({ email });
        if (usuario) {
            return res.status(401).json({ msg: "The user already exists" });
        }

        // SECURITY: Encrypting the password before saving (Hasing)
        const salt = await bcrypt.genSalt(10);
        const newPassword = await bcrypt.hash(password, salt);

        const nuevoUsuario = new Usuario({
            email, 
            password: newPassword
        });
        
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        return res.status(500).json({ msg: "Error: Create usuario failed", message: error.message });
    }
}

// POST: Authentication and Token Generation logic
exports.loginUsuario = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Verify if email exists
        const usuario = await Usuario.findOne({ email });
        // FIX: Variable name check (lowercase 'usuario' refers to the result of the query)
        if (!usuario) { 
            return res.status(400).json({ msg: "User does not exist. Invalid credentials" });
        }

        // 2. Verify password comparison (Decryption/Matching)
        const isMatch = await bcrypt.compare(password, usuario.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Wrong password. Invalid credentials" });
        }

        // 3. Define JWT Payload
        const payload = { usuario: { id: usuario.id, email: usuario.email } };

        // 4. Sign JWT (Stateless session)
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (error, token) => {
                if (error) throw error;
                res.json({ token });
            }
        );

    } catch (error) {
        return res.status(500).json({ msg: "Server error during login", message: error.message });
    }
}
