import setSourcesController from '../controllers/setSourcesController.js';
import express from 'express';

const router = express.Router();

router.post('/', setSourcesController);


export default router;