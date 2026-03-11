const mongoose = require('../models/reporte');

//Get all reports
//req = request body {} params url?param1=datos123.
exports.getReportes = async (req, res) => {
    try {
        const reportes = await Reporte.find();
        res.json(reportes);
    } catch (error) {
        //Error general
        res.status(500).json({error: "Error: Get Reports", message: error})
    }
};

exports.createReportes = async (req, res) => {
    try {
        const {titulo, descripcion, ubicacion} = req.body;

        // Logic
        let prioridad = "media";
        if (descripcion.toLowerCase().includes('fuego') || descripcion.toLowerCase().includes('incendio')){
            prioridad = "alta"
        }

        const nuevoReporte = new Reporte({
            titulo,
            descripcion,
            ubicacion,
            prioridad
        });

        await nuevoReporte.save();
        res.status(201).json(nuevoReporte); //carga exitosa
    } catch (error) {
        //Error de envio
        res.status(400).json({error: "Error: Create reports", message: error})
    }
}