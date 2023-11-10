import mongoose from "mongoose";

const cinemaSchema = mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    posterUrl:{
        type:String,
    required:true,

    },
    actors:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    }

},{timestamps:true})

export default mongoose.model("Cinema",cinemaSchema);