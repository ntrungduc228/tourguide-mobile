import {axiosClientPrivate} from '../configs/axios';
import {User} from '../types/user';

const url = '/users';

const userService = {
  getUserByPhone: (phone: string) =>
    axiosClientPrivate.get(`${url}/search/phone?q=${phone}`),
  updateProfile: (user: User) => axiosClientPrivate.patch(url, user),
};

export default userService;
