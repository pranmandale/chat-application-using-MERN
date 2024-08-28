import express from 'express';
import { sendMessage } from '../controller/Message.controller.js';
import secureRoute from '../middleware/SecureRoute.js';
import { getMessage } from '../controller/Message.controller.js';

const router = express.Router()

router.post('/send/:id',secureRoute,sendMessage)
router.get('/get/:id',secureRoute,getMessage)

export default router;