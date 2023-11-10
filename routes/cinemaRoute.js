import  express from 'express';
import { addCinema, getAllCinema, getCinemaById} from '../controllers/cinemaController.js';
const router = express.Router();


router.route("/add").post(addCinema)
router.route("/").get(getAllCinema)
router.route("/:id").get(getCinemaById)

export default router