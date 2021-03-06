import {userRegister, userLogin} from '../controllers/authController.js';
import express from 'express';

const router = express.Router();

router.post('/register', userRegister);
router.post('/login', userLogin);

export default router;