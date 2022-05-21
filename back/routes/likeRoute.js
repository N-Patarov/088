import likeController from '../controllers/likeController.js';
import express from 'express';

const router = express.Router();

router.post('/', likeController);

export default router;