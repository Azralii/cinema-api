import mongoose from "mongoose";

export const mongoConnection = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected")
    } catch (error) {
        console.log(error);
    }
}
