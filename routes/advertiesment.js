import express from 'express';
import { getAdvertiesment } from '../controllers/advertiesment.js';


const router = express.Router();

// Get All Ads
router.get("/", getAdvertiesment);

export default router;