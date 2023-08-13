import {Base} from './base';
import {User} from './user';

export type Notification = {
  creatorId: number;
  receiverId: number;
  content: string;
  creator?: User;
  receiver?: User;
  member: NotificationMember[];
} & Base;

export type NotificationMember = {
  receiverId: number;
  isReaded: boolean;
} & Base;
