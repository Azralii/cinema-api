import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
   showId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Cinema',
    required:true
   },
   userId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true
   }

},{timestamps:true})

export default mongoose.model("Booking",bookingSchema);