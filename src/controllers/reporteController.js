/**
 * Report Management Controller
 * Layer: logic
 */

// FIX: Importing the Report model correctly (Data Layer)
const Reporte = require('../models/Reportes');

// GET: Retrieve all urban reports from MongoDB
exports.getReportes = async (req, res) => {
    try {
        const reportes = await Reporte.find();
        res.json(reportes);
    } catch (error) {
        res.status(500).json({ error: "Error: Get Reports failed", message: error.message });
    }
};

// POST: Business logic to create and prioritize reports
exports.createReportes = async (req, res) => {
    try {
        const { titulo, descripcion, ubicacion } = req.body;

        // BUSINESS LOGIC: Automated Priority System
        // If keywords are found, the system automatically escalates the priority to "alta"
        let prioridad = "media";
        if (descripcion.toLowerCase().includes('fuego') || descripcion.toLowerCase().includes('incendio')){
            prioridad = "alta";
        }

        // Creating the new instance (using the Data Layer Schema)
        const nuevoReporte = new Reporte({
            titulo,
            descripcion,
            ubicacion,
            prioridad
        });

        // Saving to the database
        await nuevoReporte.save();
        res.status(201).json(nuevoReporte); 
    } catch (error) {
        res.status(400).json({ error: "Error: Create reports failed", message: error.message });
    }
}
