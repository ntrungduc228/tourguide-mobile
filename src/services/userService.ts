import {axiosClientPrivate} from '../configs/axios';

const url = '/users';

const userService = {
  getUserByPhone: (phone: string) =>
    axiosClientPrivate.get(`${url}/search/phone?q=${phone}`),
};

export default userService;
