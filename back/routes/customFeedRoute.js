import customFeedController from '../controllers/customFeedController.js';
import express from 'express';

const router = express.Router();

router.get('/', customFeedController);


export default router;