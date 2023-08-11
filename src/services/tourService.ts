import {axiosClientPrivate} from '../configs/axios';
import {Tour} from '../types/tour';

const url = '/tours';

const tourService = {
  // getPost: () => axiosClientPrivate.get(url),
  //updatePost: (id: number) => axiosClientPrivate.patch(`${url}/${id}`),
  createTour: (tour: Tour) => axiosClientPrivate.post(url, tour),
  getTourByUserId: () => axiosClientPrivate.get(`${url}/own`),
  addMembers: ({members, id}: {members: Number[]; id: Number}) =>
    axiosClientPrivate.post(`${url}/${id}/members/add`, members),
};

export default tourService;
