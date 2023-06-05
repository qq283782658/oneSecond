import axios from 'axios';
import cookie from 'react-cookies';

const request = axios.create({
  baseURL: '/api',
});
// 请求拦截器
request.interceptors.request.use((config) => {
  const token = cookie.load('token');

  if (!token && location.pathname !== '/login') {
    window.location.replace('/login');
  }
  return config;
});
export default request;
