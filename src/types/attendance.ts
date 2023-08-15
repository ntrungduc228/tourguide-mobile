import {Base} from './base';
import {User} from './user';

export type Attendance = {
  userId?: number;
  user?: User;
  isAttend: boolean;
  //   address: string;
  //   content: string;
  //   time: Date;
} & Base;
