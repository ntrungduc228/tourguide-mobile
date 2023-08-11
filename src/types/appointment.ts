import {Base} from './base';

export type Appointment = {
  address: string;
  content: string;
  time: Date;
} & Base;
