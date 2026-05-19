import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchVideoInfo = async (url) => {
  try {
    const response = await api.post('/download/info', { url });
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error || 'Failed to fetch video information.');
    }
    throw new Error('Network error or server is down. Please try again.');
  }
};

export const downloadMediaFile = async (url, formatId, ext, type, quality, title) => {
  try {
    const response = await api.post('/download/file', 
      { url, format: formatId, ext, type, quality, title }, 
      { responseType: 'blob' }
    );
    return response.data;
  } catch (error) {
    if (error.response && error.response.data instanceof Blob) {
      const text = await error.response.data.text();
      try {
        const json = JSON.parse(text);
        throw new Error(json.error || 'Failed to download file.');
      } catch (e) {
        throw new Error('Failed to download file.');
      }
    }
    throw new Error('Network error during download.');
  }
};
