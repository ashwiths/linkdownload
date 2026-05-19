import { getVideoInfo } from '../services/ytdlpService.js';
import { isValidUrl } from '../utils/helper.js';

export const getMediaInfo = async (req, res, next) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ success: false, error: 'URL is required.' });
    }

    if (!isValidUrl(url)) {
      return res.status(400).json({ success: false, error: 'Please provide a valid URL.' });
    }

    const info = await getVideoInfo(url);

    // Parse formats
    const videoFormats = [];
    const audioFormats = [];

    if (info.formats && Array.isArray(info.formats)) {
      info.formats.forEach(f => {
        // Skip formats that don't have a reliable filesize or video/audio codec
        const size = f.filesize || f.filesize_approx || null;
        
        const formatObj = {
          format_id: f.format_id,
          quality: f.resolution || f.format_note || 'Unknown',
          ext: f.ext,
          filesize: size,
          vcodec: f.vcodec,
          acodec: f.acodec,
          url: f.url
        };

        if (f.vcodec !== 'none' && f.vcodec !== null) {
          // Video format (may or may not contain audio, typically we want ones with audio or we just list all)
          videoFormats.push({
            ...formatObj,
            type: 'video'
          });
        } else if (f.acodec !== 'none' && f.acodec !== null) {
          // Audio only format
          audioFormats.push({
            ...formatObj,
            type: 'audio'
          });
        }
      });
    }

    res.status(200).json({
      success: true,
      title: info.title || '',
      thumbnail: info.thumbnail || '',
      duration: info.duration_string || info.duration || '',
      formats: {
        video: videoFormats,
        audio: audioFormats
      }
    });

  } catch (error) {
    console.error('Controller Error (getMediaInfo):', error.message);
    res.status(500).json({ success: false, error: error.message || 'Failed to fetch media info.' });
  }
};

export const downloadFile = async (req, res) => {
  try {
    const { url, format, ext, type, quality, title } = req.body; 
    
    if (!url) {
      return res.status(400).json({ success: false, error: 'URL is required.' });
    }

    const { downloadMediaToTemp } = await import('../services/ytdlpService.js');
    const fs = await import('fs/promises');

    const filePath = await downloadMediaToTemp(url, format, type, quality);
    
    const finalExt = type === 'audio' ? 'mp3' : (filePath.split('.').pop() || ext || 'mp4');
    const safeTitle = (title || 'streamdrop_download').replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const filename = `${safeTitle}_${Date.now()}.${finalExt}`;
    
    if (type === 'audio') {
      res.setHeader('Content-Type', 'audio/mpeg');
    }
    
    res.download(filePath, filename, async (err) => {
      if (err) {
        console.error('Error sending file:', err);
        if (!res.headersSent) {
          res.status(500).json({ error: 'Failed to send file.' });
        }
      }
      
      // Cleanup file after sending
      try {
        await fs.unlink(filePath);
      } catch (e) {
        console.error('Failed to cleanup temp file:', e);
      }
    });

  } catch (error) {
    console.error('Controller Error (downloadFile):', error.message);
    if (!res.headersSent) {
      res.status(500).json({ success: false, error: error.message || 'Failed to download media.' });
    }
  }
};
