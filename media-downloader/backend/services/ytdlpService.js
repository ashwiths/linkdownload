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
import os from 'os';
import { randomUUID } from 'crypto';
import fs from 'fs';

export const downloadMediaToTemp = (url, formatId, type, quality) => {
  return new Promise((resolve, reject) => {
    const tempDir = os.tmpdir();
    const uniqueId = randomUUID();
    let tempFile = path.join(tempDir, `streamdrop_${uniqueId}`);
    
    // We don't set extension because yt-dlp will append it
    let args = [
      '--no-warnings',
      '--no-playlist'
    ];

    if (type === 'audio') {
      args.push('-f', 'bestaudio/best');
      args.push('--extract-audio', '--audio-format', 'mp3');
      if (quality) {
        args.push('--audio-quality', quality); // e.g. 128K, 320K
      }
      tempFile += '.mp3';
      args.push('-o', tempFile);
    } else {
      args.push('-f', formatId || 'best');
      tempFile += '.%(ext)s';
      args.push('-o', tempFile);
    }
    
    args.push(url);

    const ytDlpProcess = spawn(ytDlpPath, args);

    ytDlpProcess.stderr.on('data', (data) => {
      console.log('yt-dlp stderr:', data.toString());
    });

    ytDlpProcess.on('close', (code) => {
      if (code === 0) {
        // Find the actual file generated since yt-dlp appends the extension
        fs.readdir(tempDir, (err, files) => {
          if (err) return reject(err);
          const generatedFile = files.find(f => f.startsWith(`streamdrop_${uniqueId}`));
          if (generatedFile) {
            resolve(path.join(tempDir, generatedFile));
          } else {
            reject(new Error('File not found after download'));
          }
        });
      } else {
        reject(new Error(`yt-dlp process exited with code ${code}`));
      }
    });
  });
};
