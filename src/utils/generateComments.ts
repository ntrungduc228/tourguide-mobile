import {Comment} from '../types/comment';

export const generateComment = (comments: Comment[]) => {
  const newComments: Comment[] = [];
  comments.forEach((comment: Comment) => {
    if (comment.commentParentId == null) {
      newComments.push(comment);
    }
  });

  comments.forEach((comment: Comment) => {
    if (comment.commentParentId != null) {
      newComments.forEach((commentChild: Comment) => {
        addChild(commentChild, comment);
      });
    }
  });

  function addChild(comment: Comment, child: Comment) {
    if (comment.id === child.commentParentId) {
      if (!comment.children) {
        comment.children = [];
      }

      comment.children?.push(child);

      return comment;
    } else if (comment.children?.length) {
      comment.children?.forEach((commentChild: Comment) => {
        addChild(commentChild, child);
      });
    }
  }
  return newComments;
};
