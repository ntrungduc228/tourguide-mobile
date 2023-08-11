import {axiosClientPrivate} from '../configs/axios';
import {Tour} from '../types/tour';

const url = '/tours';

const tourService = {
  createTour: (data: Partial<Tour>) => axiosClientPrivate.post(`${url}`, data),
  getTourByUserId: () => axiosClientPrivate.get(`${url}/own`),
};

export default tourService;
