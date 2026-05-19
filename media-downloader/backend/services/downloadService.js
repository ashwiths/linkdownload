import https from 'https';
import { Readable } from 'stream';

// High-quality public test media resources
const SAMPLE_VIDEO_URL = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
const SAMPLE_AUDIO_URL = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

/**
 * Extracts metadata for a given URL.
 * In production, you'd replace this with a tool like yt-dlp or ytdl-core.
 */
export const extractMetadata = async (url) => {
  // Simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 800));

  const isAudio = url.toLowerCase().includes('audio') || url.toLowerCase().includes('mp3');
  const isYoutube = url.includes('youtube.com') || url.includes('youtu.be');

  // Return a rich, structured metadata schema
  return {
    title: isYoutube 
      ? "Lofi Hip Hop Radio 🌌 Beats to Relax/Study To" 
      : "AeroStream Premium Media Extraction Output Sample",
    author: isYoutube ? "Lofi Girl" : "AeroStream Services",
    duration: "3:45",
    thumbnail: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800&auto=format&fit=crop",
    url: url,
    formats: [
      { id: '1080p', quality: '1080p Full HD', ext: 'mp4', size: '42.5 MB', type: 'video' },
      { id: '720p', quality: '720p HD', ext: 'mp4', size: '24.1 MB', type: 'video' },
      { id: 'audio', quality: '320kbps High', ext: 'mp3', size: '8.6 MB', type: 'audio' },
    ]
  };
};

/**
 * Initiates the media stream.
 * Resolves with the stream itself, formatted filename, and MIME content-type.
 */
export const getDownloadStream = async (url, formatId, type) => {
  const targetUrl = type === 'audio' ? SAMPLE_AUDIO_URL : SAMPLE_VIDEO_URL;
  const ext = type === 'audio' ? 'mp3' : 'mp4';
  const contentType = type === 'audio' ? 'audio/mpeg' : 'video/mp4';
  const filename = `aerostream_media_${Date.now()}.${ext}`;

  return new Promise((resolve, reject) => {
    https.get(targetUrl, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to fetch media source stream: Status code ${res.statusCode}`));
        return;
      }
      resolve({
        stream: res,
        filename,
        contentType
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};
