/**
 * User Model Schema
 * Layer: Data
 * * This file defines the structure for user accounts. 
 * It ensures that every user has a unique email and a password.
 */
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true, // Corrected from 'require'
        unique: true,   // SECURITY: Prevents duplicate accounts with the same email
        trim: true,     // Removes extra spaces from the input
        lowercase: true // Normalizes email to avoid case-sensitive login issues
    },
    password: {
        type: String,
        required: true  // Essential for the login/registration logic
    },
    createdAt: {
        type: Date,
        default: Date.now // Records when the user was registered
    }
});

/**
 * We export the model as 'Usuario'. 
 * The Logic Layer (Controllers) will use this to find, create, and validate users.
 */
module.exports = mongoose.model('Usuario', usuarioSchema);
