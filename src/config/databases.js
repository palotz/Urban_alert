/**
 * Configuration file for Database Connection
 * Layer: Data Layer / Config
 */

const mongoose = require('mongoose');

/**
 * Establishes a connection to MongoDB Atlas using the URI provided in the environment variables.
 * @async
 */
const connectDB = async () => {
    try {
        // We use the MONGO_URI from the .env file to keep credentials secure
        // Ensure you have MONGO_URI=your_connection_string in your .env file
        await mongoose.connect(process.env.MONGO_URI);
        
        console.log('✅ Successful connection to MongoDB');
    } catch (error) {
        // If connection fails, we log the error and stop the server process (exit 1)
        console.error('❌ Error connecting to MongoDB:', error.message);
        
        // Critical failure: the application cannot run without a database connection
        process.exit(1);
    }
}

// Export the function to be used in the main index.js file
module.exports = connectDB;
