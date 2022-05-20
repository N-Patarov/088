import useController from '../controllers/userController.js';
import express from 'express';

const router = express.Router();

router.get('/', useController);

export default router;