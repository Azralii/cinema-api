import  express from 'express';
import { getMyBookings, login, signUp } from '../controllers/userController.js';
import { authenticateToken } from '../middleware/auth.js';
const router = express.Router();


router.route("/signup").post(signUp)
router.route("/login").post(login)
router.route('/my-bookings/:userId').get(authenticateToken,getMyBookings)

export default router