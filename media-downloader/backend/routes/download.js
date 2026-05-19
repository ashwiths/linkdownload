import express from 'express';
import { getMediaInfo, downloadFile } from '../controllers/downloadController.js';

const router = express.Router();

// POST /api/download/info
router.post('/info', getMediaInfo);

// POST /api/download/file
router.post('/file', downloadFile);

export default router;
