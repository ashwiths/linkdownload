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
