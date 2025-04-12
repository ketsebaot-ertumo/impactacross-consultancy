import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_URL) {
  throw new Error('❌ API_URL is not defined in environment variables.');
}

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// // Optional: Add interceptors if needed (auth, errors, etc.)
// apiClient.interceptors.response.use(
//   response => response.data,
//   error => Promise.reject(error.response?.data || error)
// );

export default apiClient;
