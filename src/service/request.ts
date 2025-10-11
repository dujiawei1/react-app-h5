import axios from 'axios';
import { Toast } from 'antd-mobile';

// 模拟相关函数类型定义（实际项目中应从对应模块导入）
const getToken = (): string | null => {
  // 实现获取token逻辑
  return localStorage.getItem('token') || null;
};

// 定义请求选项接口
interface RequestOptions {
  showLoading?: boolean;
  message?: string;
  [key: string]: any;
}

// 创建axios实例
const request = axios.create({
  headers: {
    'content-type': 'application/json;charset=UTF-8'
  },
  baseURL: process.env.REACT_APP_BASE_API || '',
  timeout: 600000
});

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (config.headers) {
      config.headers.Authorization = token ? `Bearer ${token}` : '';
      config.headers['Content-Language'] = 'zh_CN';
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    Toast.clear();
    if (response.data.code === 401) {
      return Promise.reject(new Error('未授权'));
    }

    if (response.data.code === 500) {
      Toast.show({ content: response.data.msg, icon: 'fail' });
      return Promise.reject(new Error(response.data.msg));
    }

    if (response.data.code !== 200) {
      console.error('status不为200（错误信息）：', response.data.msg);
      Toast.show({ content: response.data.msg, icon: 'fail' });
      return Promise.reject(response);
    } else {
      return response.data;
    }
  },
  (error) => {
    Toast.clear();
    if (error.code === 'ERR_NETWORK') {
      Toast.show({ content: '网络连接错误，请稍后重试' });
    } else {
      Toast.show({ content: error.message || '请求失败' });
    }
    return Promise.reject(error.message || '请求失败');
  }
);

const http = {
  get<T = any>(
    url: string,
    params?: any,
    options: RequestOptions = {}
  ): Promise<T> {
    if (options.showLoading !== false) {
      const message = options.message || '加载中...';
      Toast.show({
        icon: 'loading',
        content: message,
        duration: 0,
        maskClickable: false
      });
    }
    return request({
      url,
      params,
      method: 'get'
    });
  },

  post<T = any>(
    url: string,
    params?: any,
    options: RequestOptions = {}
  ): Promise<T> {
    if (options.showLoading !== false) {
      const message = options.message || '请稍后...';
      Toast.show({
        icon: 'loading',
        content: message,
        duration: 0,
        maskClickable: false
      });
    }
    return request({
      url,
      data: params,
      method: 'post',
      ...options
    });
  },

  put<T = any>(
    url: string,
    params?: any,
    options: RequestOptions = {}
  ): Promise<T> {
    if (options.showLoading !== false) {
      const message = options.message || '加载中...';
      Toast.show({
        icon: 'loading',
        content: message,
        duration: 0,
        maskClickable: false
      });
    }
    return request({
      url,
      data: params,
      method: 'put'
    });
  },

  delete<T = any>(
    url: string,
    params?: any,
    options: RequestOptions = {}
  ): Promise<T> {
    if (options.showLoading !== false) {
      const message = options.message || '加载中...';
      Toast.show({
        icon: 'loading',
        content: message,
        duration: 0,
        maskClickable: false
      });
    }
    return request({
      url,
      params,
      method: 'delete'
    });
  }
};

export default http;
