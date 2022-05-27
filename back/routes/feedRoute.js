import feedController from '../controllers/feedController.js';
import express from 'express';

const router = express.Router();

router.get('/', feedController);


export default router;