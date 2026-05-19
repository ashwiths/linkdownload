import express from 'express';
import { getMediaInfo } from '../controllers/downloadController.js';

const router = express.Router();

// POST /api/download/info
router.post('/info', getMediaInfo);

export default router;
