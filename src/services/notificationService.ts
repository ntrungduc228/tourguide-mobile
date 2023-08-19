import {axiosClientPrivate} from '../configs/axios';

const url = '/notifications';

const notificationService = {
  getNotificationsByUserId: () => axiosClientPrivate.get(`${url}/own`),
  readAllNotification: () => axiosClientPrivate.patch(`${url}`),
};

export default notificationService;
