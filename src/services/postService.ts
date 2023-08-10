import {axiosClientPrivate} from '../configs/axios';

const url = '/posts';

const postApi = {
  getPost: () => axiosClientPrivate.get(`${url}`),
  updatePost: (id: number) => axiosClientPrivate.patch(`${url}/${id}`),
};

export default postApi;