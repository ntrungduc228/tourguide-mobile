import {axiosClientPrivate} from '../configs/axios';
import {Tour} from '../types/tour';

const url = '/tours';

const tourService = {
  getTourById: (id: number) => axiosClientPrivate.get(`${url}/${id}`),
  updateTour: (data: any) =>
    axiosClientPrivate.patch(`${url}/${data?.id}`, data),
  createTour: (tour: Tour) => axiosClientPrivate.post(url, tour),
  getTourByUserId: () => axiosClientPrivate.get(`${url}/own`),
  addMembers: ({members, id}: {members: Number[]; id: Number}) =>
    axiosClientPrivate.post(`${url}/${id}/members/add`, {userIds: members}),
  getMembersTour: (id: number) =>
    axiosClientPrivate.get(`${url}/${id}/members`),
  getDestinationsTour: (id: number) =>
    axiosClientPrivate.get(`${url}/${id}/destinations`),
  removeMembers: ({members, id}: {members: Number[]; id: Number}) =>
    axiosClientPrivate.patch(`${url}/${id}/members/remove`, {userIds: members}),
  getOwnTour: () => axiosClientPrivate.get(`${url}/own`),
  beginTourById: (id: number) => axiosClientPrivate.patch(`${url}/${id}/begin`),
  endTourById: (id: number) => axiosClientPrivate.patch(`${url}/${id}/end`),
  joinRoom: (id: number) =>
    axiosClientPrivate.post(`${url}/${id}/members/join`),
  approveMembers: ({id, data}: {id: number; data: {userIds: number[]}}) =>
    axiosClientPrivate.patch(`${url}/${id}/members/approve`, data),
  getListMembersRequest: (id: number) =>
    axiosClientPrivate.get(`${url}/${id}/members/request`),
  getTourProgess: () => axiosClientPrivate.get(`${url}/progress`),
};

export default tourService;
