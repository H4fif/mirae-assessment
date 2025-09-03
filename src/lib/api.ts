import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.BASE_URL,
});

API.interceptors.request.use((config) => {
  console.log('HERE IS THE INTERCEPTORS');

  return config;
});
