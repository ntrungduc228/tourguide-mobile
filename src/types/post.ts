import {Base} from './base';
import {File} from './file';
import {User} from './user';

export type Post = {
  content: string;
  files?: File[];
  likes: number;
  user?: User;
} & Base;
