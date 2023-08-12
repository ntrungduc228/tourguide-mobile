import {axiosClientPrivate} from '../configs/axios';

const url = '/posts';

const postService = {
  getPost: () => axiosClientPrivate.get(url),
  getPostByTour: (id: number) => axiosClientPrivate.get(`${url}?tour=${id}`),
  updatePost: (id: number) => axiosClientPrivate.patch(`${url}/${id}`),
  createPost: (post: {
    files: {
      link: string;
    }[];
    content: string;
    tourId: number;
  }) => axiosClientPrivate.post(url, post),
};

export default postService;
