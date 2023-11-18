import mongoose from "mongoose";


// Define the schema for the seats
const seatSchema = new mongoose.Schema({
    seatNumber: { type: String, required: true },
    booked: { type: Boolean, default: false }
});

// Define the schema for the shows
const showSchema = new mongoose.Schema({
    time: { type: String, },
    room: { type: String, required: true },
    seats: [seatSchema]
});

// Define the main schema for the movie
const movieSchema = new mongoose.Schema({
    //   _id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: String, required: true },
    image: { type: String, required: true },
    shows: [showSchema]
});

// Create the Movie model
export default mongoose.model("Cinema", movieSchema);