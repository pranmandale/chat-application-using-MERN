
import express from 'express';
import { signup, login, logout, allusers } from '../controller/User.controller.js';  // Import allusers
import SecureRoute from '../middleware/SecureRoute.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/allusers',SecureRoute, allusers);  

export default router;
