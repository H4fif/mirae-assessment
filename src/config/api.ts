import axios from 'axios';
import ENV from './env';

export const API = axios.create({
  baseURL: ENV.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('access-token');
  // const refreshToken = localStorage.getItem('refresh-token');

  if (accessToken?.length) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  return config;
});
