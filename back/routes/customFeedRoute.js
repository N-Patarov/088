import customFeedController from '../controllers/customFeedController.js';
import express from 'express';

const router = express.Router();

router.post('/', customFeedController);


export default router;