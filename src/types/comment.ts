import {Base} from './base';
import {User} from './user';

export type Comment = {
  postId: number;
  content: string;
  isDelete: boolean;
  user?: User;
  commentParentId: number | null;
  children?: Comment[];
} & Base;
