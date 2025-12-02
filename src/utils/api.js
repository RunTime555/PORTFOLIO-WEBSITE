import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000, // 5 second timeout
});

// Add request interceptor to handle errors gracefully
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Don't log network errors if backend is not running
    if (error.code === 'ECONNREFUSED' || error.message.includes('Network Error')) {
      console.log('Backend not available');
    }
    return Promise.reject(error);
  }
);

// Projects API
export const getProjects = () => api.get('/projects');
export const getProject = (id) => api.get(`/projects/${id}`);
export const createProject = (data) => api.post('/projects', data);
export const updateProject = (id, data) => api.patch(`/projects/${id}`, data);
export const deleteProject = (id) => api.delete(`/projects/${id}`);

// Auth API
export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (userData) => api.post('/auth/register', userData);
export const getMe = () => api.get('/auth/me');
export const logout = () => api.post('/auth/logout');

// Contact API
export const sendMessage = (messageData) => api.post('/contact', messageData);
export const getMessages = () => api.get('/contact');

export default api;

