import  express from 'express';
import { createBooking } from '../controllers/bookingController.js';
import { authenticateToken } from '../middleware/auth.js';
const router = express.Router();

router.use(authenticateToken)
router.route("/").post(createBooking)


export default router