import express from 'express';
import { analyzeMedia, startDownload } from '../controllers/downloadController.js';

const router = express.Router();

// POST /api/download/analyze
router.post('/analyze', analyzeMedia);

// POST /api/download/start
router.post('/start', startDownload);

export default router;
