import getLikesController from '../controllers/getLikesController.js';
import express from 'express';

const router = express.Router();

router.get('/', getLikesController);

export default router;