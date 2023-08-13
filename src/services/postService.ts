import {axiosClientPrivate} from '../configs/axios';
import {Post} from '../types/post';

const url = '/posts';

const postService = {
  getPost: () => axiosClientPrivate.get(url),
  getPostByTour: (id: number) => axiosClientPrivate.get(`${url}?tour=${id}`),
  updatePost: (post: Post) =>
    axiosClientPrivate.patch(`${url}/${post.id}`, post),
  createPost: (post: {
    files: {
      link: string;
    }[];
    content: string;
    tourId: number;
  }) => axiosClientPrivate.post(url, post),
};

export default postService;
