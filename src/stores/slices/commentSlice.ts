import {createSlice} from '@reduxjs/toolkit';
import commentsByParentId from '../../utils/commentsByParentId';
import {Comment} from '../../types/comment';
const initialState: {
  list: Comment[];
  commentsByParentId: {[replyId: number]: Comment[]};
} = {
  list: [],
  commentsByParentId: {},
};
const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    setComments: (state, action) => {
      state.list = action.payload;
      state.commentsByParentId = commentsByParentId(action.payload);
    },
    addComment: (state, action) => {
      state.list.unshift(action.payload);
      state.commentsByParentId = commentsByParentId(state.list);
    },

    updateComment: (state, action) => {
      state.list = state.list.map(comment => {
        if (comment.id === action.payload.id) return action.payload;
        return comment;
      });
      state.commentsByParentId = commentsByParentId(state.list);
    },
    removeComment: (state, action) => {
      state.list = state.list.filter(comment => comment.id !== action.payload);
      state.commentsByParentId = commentsByParentId(state.list);
    },
  },
});

export const {setComments, addComment, removeComment, updateComment} =
  commentSlice.actions;

const commentReducer = commentSlice.reducer;
export default commentReducer;
