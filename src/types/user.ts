import {Base} from './base';

export enum ROLE {
  TOURIST = 'TOURIST',
  TOURIST_GUIDE = 'TOURIST_GUIDE',
}

export type User = {
  fullName: string;
  avatar: string;
  phone: string;
  address: string;
  email: string;
  role: ROLE;
} & Base;

export type AuthDTO = {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  address: string;
};

export type PasswordDTO = {
  password: string;
  newPassword?: string;
};
