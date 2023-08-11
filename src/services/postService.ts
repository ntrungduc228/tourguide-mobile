import {axiosClientPrivate} from '../configs/axios';

const url = '/posts';

const postApi = {
  getPost: () => axiosClientPrivate.get(url),
  getPostByTour: (id: number) => axiosClientPrivate.get(`${url}?tour=${id}`),
  updatePost: (id: number) => axiosClientPrivate.patch(`${url}/${id}`),
  createPost: () => axiosClientPrivate.post(url),
};

export default postApi;
