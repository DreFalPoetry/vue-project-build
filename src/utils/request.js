import axios from 'axios';
import { Message } from 'element-ui';
import { baseUrl } from '@/setting.js';

const service = axios.create({
  baseURL: baseUrl || process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

//  request interceptors 请求拦截器
service.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
)

// response interceptors 响应拦截器
service.interceptors.response.use(
  function(response) {
    const res = response.data;
    return res;
  },
  function(error) {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error);
  }
)
