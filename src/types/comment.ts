import {Base} from './base';
import {File} from './file';
import {User} from './user';

export type Comment = {
  postId: number;
  content: string;
  isDelete: boolean;
  user?: User;
  commentParentId: number | null;
  children?: Comment[];
  file?: File;
} & Base;
