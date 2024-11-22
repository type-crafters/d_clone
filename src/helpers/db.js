import mongoose from "mongoose";

export default async function connect() {
    try {
        const MONGODB_URI = process.env.MONGO_DB_URI;
        if(!MONGODB_URI) {
            return {success: false, message: "Environment variable 'MONGODB_URI' not set. Unable to connect to database."};
        }
        await mongoose.connect(MONGODB_URI);
        return {success: true, message: "Connected to MongoDB database."};  
    } catch(error) {
        return {success: false, message: "MongoDB connection error caught and logged by function 'connect'.\n=========================\n " + error.message}; 
    }
}