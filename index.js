//pa prender esta madre -- node index.js
require('dotenv').config();//exportamos las variables de entorno
const express = require('express');
const connectDB = require('./src/config/databases');

//Importación de Rutas
const reportesRoutes = require("./src/routes/reportes");
const authRoutes = require("./src/routes/auth"); 

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json()); //Permite que la API sentienda JSON


connectDB();//Conexión a la Base de Datos

// Definición de RutasEndpoints
app.use("/api/reportes", reportesRoutes); //Rutas para los reportes de Urban Alert
app.use("/api/auth", authRoutes);//Rutas para login y JWT

//Ruta de prueba inicial
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to UrbanAlert API',
        status: 'Server Running'
    });
});


app.listen(PORT, () => { 
    console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
});

//pa prender esta madre -- node index.js