import apiControlller from '../controllers/apiController.js';
import express from 'express';

const router = express.Router();

router.get('/', apiControlller);

export default router;