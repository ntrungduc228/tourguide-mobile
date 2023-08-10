import {Base} from './base';

export type User = {
  fullName: string;
  avatar: string;
  phone: string;
  address: string;
  email: string;
} & Base;

export type AuthDTO = {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  address: string;
};
