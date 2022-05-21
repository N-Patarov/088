import likeController from '../controllers/likeController.js';
import express from 'express';

const router = express.Router();

router.put('/', likeController);

export default router;