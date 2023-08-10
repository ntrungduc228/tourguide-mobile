import {axiosClient, axiosClientPrivate} from '../configs/axios';
import {AuthDTO} from '../types/user';

const url = '/auth';

const authService = {
  signIn: (data: Partial<AuthDTO>) => axiosClient.post(`${url}/signin`, data),
  getAuthInfo: () => axiosClientPrivate.get(url + '/info'),
};

export default authService;
