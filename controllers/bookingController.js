
import Cinema from "../models/cinemaModel.js";
import Booking from '../models/bookingModel.js';


export const createBooking = async (req, res) => {
    const { name, email, showId, userId, seatNumber, room } = req.body;
    console.log(req.body);
    try {


        const cinema = await Cinema.findOne({ "_id": showId });

        const show = cinema?.shows.find(show => show.room === room);

       
        if (!show) {
            return res.status(404).json({ message: 'Show not found' });
        }


        // Find the seat in the room
        const seat = show?.seats?.find(s => s.seatNumber === seatNumber);

        if (!seat) {
            return res.status(404).json({ message: 'Seat not found' });
        }

        if (seat.booked) {
            return res.status(400).json({ message: 'Seat already booked' });
        }

        // Update seat status to booked
        seat.booked = true;

        console.log("updated ?",cinema)

        // Create a new booking
        const newBooking = new Booking({
            name,
            email,
            showId,
            userId,
            seatNumber,
        });

        const savedBooking = await newBooking.save();

        // Save the updated cinema data
        await cinema.save();

        res.status(201).json({ success: true, booking: savedBooking });




    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};