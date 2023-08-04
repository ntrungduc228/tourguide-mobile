import {Base} from './base';

export enum FileType {
  IMAGE,
  FILE,
}

export enum RootType {
  POST,
  COMMENT,
}

export type File = {
  link: string;
  type: FileType;
  root: RootType;
} & Base;
