import homeController from '../controllers/homeController.js';
import express from 'express';

const router = express.Router();

router.get('/', homeController);

export default router;