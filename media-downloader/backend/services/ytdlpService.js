import { execFile } from 'child_process';
import { promisify } from 'util';
import path from 'path';
import { fileURLToPath } from 'url';

const execFileAsync = promisify(execFile);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ytDlpPath = path.resolve(__dirname, '../utils/yt-dlp');

export const getVideoInfo = async (url) => {
  try {
    const { stdout } = await execFileAsync(ytDlpPath, [
      '-j', 
      '--no-warnings', 
      '--no-playlist', 
      url
    ]);
    const info = JSON.parse(stdout);
    return info;
  } catch (error) {
    if (error.stderr) {
      console.error('yt-dlp error:', error.stderr);
      if (error.stderr.includes('Unsupported URL')) {
        throw new Error('Unsupported URL or platform.');
      }
    }
    throw new Error('Failed to fetch video info or invalid URL.');
  }
};

import { spawn } from 'child_process';

export const streamMedia = (url, formatId) => {
  // Use formatId or fallback to best
  const formatArg = formatId || 'best';
  
  // Spawn yt-dlp to output to stdout
  const ytDlpProcess = spawn(ytDlpPath, [
    '-f', formatArg,
    '--no-warnings',
    '-o', '-', // output to stdout
    url
  ]);

  return ytDlpProcess;
};
