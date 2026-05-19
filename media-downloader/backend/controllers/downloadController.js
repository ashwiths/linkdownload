import * as downloadService from '../services/downloadService.js';
import { isValidUrl } from '../utils/helper.js';

/**
 * Analyze the media link and return metadata (title, formats, thumbnail, etc.)
 */
export const analyzeMedia = async (req, res, next) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL is required.' });
    }

    if (!isValidUrl(url)) {
      return res.status(400).json({ error: 'Please provide a valid URL.' });
    }

    const metadata = await downloadService.extractMetadata(url);
    res.status(200).json(metadata);
  } catch (error) {
    console.error('Controller Error (analyzeMedia):', error);
    res.status(500).json({ error: 'Failed to analyze url. Please try again.' });
  }
};

/**
 * Initiate downloading and pipe the media stream back to the client
 */
export const startDownload = async (req, res, next) => {
  try {
    const { url, formatId, type } = req.body;

    if (!url || !formatId) {
      return res.status(400).json({ error: 'URL and format selection are required.' });
    }

    // Call service to get the stream and metadata
    const { stream, filename, contentType } = await downloadService.getDownloadStream(url, formatId, type);

    // Set response headers to force download behavior
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', contentType);

    // Pipe the media stream directly to client
    stream.pipe(res);

    stream.on('error', (err) => {
      console.error('Stream piping error:', err);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Download stream interrupted.' });
      }
    });

  } catch (error) {
    console.error('Controller Error (startDownload):', error);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Failed to start download. Please verify inputs.' });
    }
  }
};
