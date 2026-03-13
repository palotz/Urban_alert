/**
 * Authentication Routes
 * Layer: Network
 * * This file defines the endpoints for user management.
 * All routes here are public (no token required to register or login).
 */
const express = require('express');
const router = express.Router();
const authController = require('../controllers/usuarioControllers'); // Corrected plural

// POST: /api/auth/register - Create a new account
router.post('/register', authController.registerUsuario);

// POST: /api/auth/login - Authenticate and get a JWT
router.post('/login', authController.loginUsuario);

// GET: /api/auth/getAllUsers - Internal testing to see registered users
router.get("/getAllUsers", authController.getAllUsers);

module.exports = router;
