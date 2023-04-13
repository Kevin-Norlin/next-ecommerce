import mongoose from "mongoose";

// Connecting to mongoose
const { MONGODB_URI } = process.env;

export const connect = async () => {
    try {
        const conn = await mongoose;
        conn.connect(MONGODB_URI as string);
        console.log("Mongoose Connection Successful!");
    }
    catch (error) {
        console.error(error);
    }

}