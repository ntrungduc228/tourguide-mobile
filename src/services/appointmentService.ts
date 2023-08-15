import {axiosClientPrivate} from '../configs/axios';

const url = '/appointments';

const appointmentService = {
  getComments: (postId: number) => {
    const link = `${url}?post=${postId}`;
    return axiosClientPrivate.get(link);
  },
  getPostByTour: (id: number) => axiosClientPrivate.get(`${url}?tour=${id}`),
  updatePost: (id: number) => axiosClientPrivate.patch(`${url}/${id}`),
  createAppointment: (appointment: {
    tourId: number;
    address: string;
    content: string;
    userIds: number[];
  }) => axiosClientPrivate.post(url, appointment),
};

export default appointmentService;
