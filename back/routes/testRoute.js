import {testController} from '../controllers/testController.js';
import express from 'express';
import Private from '../controllers/private.js';
const router = express.Router();

router.get('/',Private, testController);


export default router;