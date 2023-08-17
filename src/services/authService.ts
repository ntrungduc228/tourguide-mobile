import {axiosClient, axiosClientPrivate} from '../configs/axios';
import {AuthDTO} from '../types/user';

const url = '/auth';

const authService = {
  signIn: (data: Partial<AuthDTO>) => axiosClient.post(`${url}/signin`, data),
  getAuthInfo: () => axiosClientPrivate.get(url + '/info'),
  signUp: (data: Partial<AuthDTO>) => axiosClient.post(`${url}/signup`, data),
};

export default authService;
