import {axiosClientPrivate} from '../configs/axios';
import {User} from '../types/user';

const url = '/users';

const userService = {
  getUserByPhone: (phone: string) =>
    axiosClientPrivate.get(`${url}/search/phone?q=${phone}`),
  updateProfile: (user: {
    fullName: string;
    address: string;
    phone: string;
    avatar: string;
  }) => {
    console.log('user');
    return axiosClientPrivate.patch(url, user);
  },
};

export default userService;
