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
