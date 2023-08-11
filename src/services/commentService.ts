import {axiosClientPrivate} from '../configs/axios';

const url = '/comments';

const commentService = {
  getPost: () => axiosClientPrivate.get(url),
  getPostByTour: (id: number) => axiosClientPrivate.get(`${url}?tour=${id}`),
  updatePost: (id: number) => axiosClientPrivate.patch(`${url}/${id}`),
  createComment: (comment: {
    postId: number;
    content: string;
    parentId?: number;
  }) => axiosClientPrivate.post(url, comment),
};

export default commentService;
