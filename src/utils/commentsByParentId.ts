import {Comment} from '../types/comment';

const commentsByParentId = (comments: Comment[]) => {
  const group: {[replyId: number]: Comment[]} = {};
  comments.forEach(comment => {
    group[comment.parentId!!] ||= [];
    group[comment.parentId].push(comment);
  });
  return group;
};

export default commentsByParentId;
