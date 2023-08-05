import {Base} from './base';
import {User} from './user';

export type Notification = {
  createrId: number;
  content: string;
  creater?: User;
  member: NotificationMember[];
} & Base;

export type NotificationMember = {
  receiverId: number;
  isReaded: boolean;
} & Base;
