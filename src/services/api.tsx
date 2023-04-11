import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  timeout: 4000,
});

export default axiosInstance;
