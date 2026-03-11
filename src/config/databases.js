//conexion con el mongo, es la logica
const mongoose = require ('mongoose');

const connectDB = async () => {
    try{
        //Connction MongoDB
        await mongoose.connect(process.env.MONGO_URI);//la promesa 
        console.log('Succesful conection to MongoDB👌');
    }catch (error){
        console.error('🥸 Error concetoin MongoDB:', error.message);
        process.exit(1);
    }
}

module.exports = connectDB;//exportas para ue sea disponble para todo el proyecto