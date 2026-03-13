/**
 *  UrbanAlert API - Main Entry Point
 * Architecture: N-Layer Monolith (Config, Red, Lógica, Datos)
 * * Instructions:
 * 1. Configure your .env file with MONGO_URI and JWT_SECRET.
 * 2. Run 'npm install' to download dependencies.
 * 3. Start the server using 'node index.js'.
 */

// Layer: CONFIG (Environment Variables)
require('dotenv').config(); 

const express = require('express');
const connectDB = require('./src/config/databases');

// Layer: RED (Route Imports)
// We import the route definitions to expose our endpoints
const reportesRoutes = require("./src/routes/reportes");
const authRoutes = require("./src/routes/auth"); 

const app = express();
const PORT = process.env.PORT || 3000;

// GLOBAL MIDDLEWARES
// This allows our API to understand and parse JSON data sent by the client
app.use(express.json()); 

// Layer: CONFIG (Database Connection)
// Executes the logic to connect to MongoDB Atlas
connectDB();

// Layer: RED (Route Mounting)
// We assign specific prefix paths to our imported routes
app.use("/api/reportes", reportesRoutes); // Handles all incident-related requests
app.use("/api/auth", authRoutes);         // Handles all security and user requests

/**
 * Basic Health Check Route
 * Useful to verify if the server is alive without authentication
 */
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to UrbanAlert API',
        status: 'Server Running',
        version: '1.0.0'
    });
});

/**
 * Server Startup
 * Listens for incoming connections on the specified PORT
 */
app.listen(PORT, () => { 
    console.log(`🚀 Server running at: http://localhost:${PORT}`);
    console.log(`📁 API Documentation available in the README.md`);
});
