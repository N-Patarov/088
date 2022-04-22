import articleControlller from '../controllers/articleController.js';
import express from 'express';

const router = express.Router();

router.get('/', articleControlller);

export default router;