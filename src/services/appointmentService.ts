import {axiosClientPrivate} from '../configs/axios';

const url = '/appointments';

const appointmentService = {
  getAppointments: (id: number) => {
    const link = `${url}/${id}`;
    return axiosClientPrivate.get(link);
  },
  getMembers: (id: number) => axiosClientPrivate.get(`${id}/members`),
  // updatePost: (id: number) => axiosClientPrivate.patch(`${url}/${id}`),
  createAppointment: (appointment: {
    tourId: number;
    address: string;
    content: string;
    userIds: number[];
    time: Date;
  }) => axiosClientPrivate.post(url, appointment),
};

export default appointmentService;
