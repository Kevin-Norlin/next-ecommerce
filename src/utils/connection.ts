import mongoose from "mongoose";

// Connecting to mongoose
const { MONGODB_URI } = process.env;

export const connect = async () => {
    const conn = await mongoose
        .connect(MONGODB_URI as string)
        .catch(err => console.log(err))
    console.log("Mongoose Connection Successful!")
}