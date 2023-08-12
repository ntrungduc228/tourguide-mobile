import {axiosClientPrivate} from '../configs/axios';

const url = '/comments';

const commentService = {
  getComments: (postId: number) => {
    const link = `${url}?post=${postId}`;
    return axiosClientPrivate.get(link);
  },
  getPostByTour: (id: number) => axiosClientPrivate.get(`${url}?tour=${id}`),
  updatePost: (id: number) => axiosClientPrivate.patch(`${url}/${id}`),
  createComment: (comment: {
    postId: number;
    content: string;
    parentId?: number;
  }) => axiosClientPrivate.post(url, comment),
};

export default commentService;
