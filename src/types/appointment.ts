import {Base} from './base';
import {User} from './user';

export type Appointment = {
  address: string;
  content: string;
  time: Date;
  userId: number;
  user?: User;
} & Base;
