import Config from 'react-native-config';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {store} from '../stores/';
import {logout} from '../stores/slices/userSlice';

const baseURL = Config.REACT_APP_SERVER_URL;

// console.log('config ', Config.REACT_APP_SERVER_URL);
export const axiosClientPrivate = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'multipart/form-data',
    'content-type': 'application/json',
  },
  timeout: 60000,
  withCredentials: true,
});

export const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'multipart/form-data',
    'content-type': 'application/json',
  },
  withCredentials: true,
  timeout: 60000, // 60 seconds
});

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error?.code === 'ERR_NETWORK') {
      // toast.error('Đã có lỗi xảy ra');
    }
    console.log('error axios client', error);

    return Promise.reject(error?.response?.data);
  },
);

axiosClientPrivate.interceptors.request.use(
  async config => {
    const accessToken = store.getState().user.data.accessToken;
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    if (accessToken) {
      const decodeToken = await jwt_decode(accessToken);

      const today = new Date();
      //   if (decodeToken.exp < today.getTime() / 1000) {
      //     store.dispatch(logout());
      //   }
    }

    return config;
  },
  error => {
    return Promise.reject(error.response.data);
  },
);

axiosClientPrivate.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    // console.log('error', error);
    if (error.code === 'ERR_NETWORK') {
      // window.location.href = '/404';
      // toast.error('Đã có lỗi xảy ra');
    }
    if (error.response?.status === 401) {
      console.log('not author client');
      // store.dispatch(logout());
    }
    // console.log('error axios', error);
    return Promise.reject(error?.response?.data);
  },
);
