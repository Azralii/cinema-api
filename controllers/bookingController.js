import Cinema from "../models/cinemaModel.js"
import Booking from '../models/bookingModel.js'

export const createBooking =async(req,res)=>{
    const {name,email,showId,userId} = req.body
    try {
        const show = await Cinema.findById(showId)
        if(!show){
            return res.status(404).json({message:'Film not found'})
        }
        const newBooking = new Booking({
            name,
            email,
            showId,
            userId
        })

        const savedBooking = await newBooking.save()
        res.status(201).json({success:true,booking:savedBooking})
    } catch (error) {
     res.status(500).json({message:error.message})   
    }
}

// get booking by film id