import userController from '../controllers/userController.js';
import express from 'express';

const router = express.Router();

router.get('/', userController);


export default router;