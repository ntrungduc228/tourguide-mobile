import {Base} from './base';

export type User = {
  fullName: string;
  avatar: string;
  phone: string;
} & Base;
