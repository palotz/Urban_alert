//capa de datos
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    titulo:{
        type: String,
        require: true

    },
    descripcion:{
        type: String,
        require: true
    },
    ubicacion:{  
        type: String,
        require: true
    },
    prioridad:{
        type: String,
        enum:['baja','media','alta'],
        default: 'media'

    },
    estado:{
        type: String,
        default:'abierto'

    },
    fechaCreacion:{
        type: Date,
        default: Date.now()

    },
})//parentesis pq es una funcion
module.exports = mongoose.model('Reporte', reportSchema);