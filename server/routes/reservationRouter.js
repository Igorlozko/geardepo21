import {Router} from 'express'
import auth from '../middleware/auth.js';
import {createReservation} from '../controllers/reservation.js'




const reservationRouter = Router()

reservationRouter.post('/', auth, createReservation ); // when post request recieved to create a reservation intercept the request by the auth

export default reservationRouter;

//inside the auth we have the user object to verify the token of the user 
