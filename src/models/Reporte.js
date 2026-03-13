/**
 * Report Model Schema
 * Layer: Data
 * * This file defines the structure of the "reports" collection in MongoDB.
 * It ensures that every report submitted follows the same format.
 */
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true // FIX: Corrected from 'require' to 'required'
    },
    descripcion: {
        type: String,
        required: true
    },
    ubicacion: {  
        type: String,
        required: true
    },
    prioridad: {
        type: String,
        // Enum restricts the values to these three options only
        enum: ['baja', 'media', 'alta'],
        default: 'media'
    },
    estado: {
        type: String,
        // Default status for new reports
        default: 'abierto'
    },
    fechaCreacion: {
        type: Date,
        // Automatically captures the timestamp of the report
        default: Date.now 
    },
});

/**
 * We export the model so the Controller (Logic Layer) can perform CRUD operations.
 * It will be stored in the 'reportes' collection in MongoDB.
 */
module.exports = mongoose.model('Reporte', reportSchema);
