import {Base} from './base';

export enum FileType {
  POST,
  COMMENT,
}

export type File = {
  link: string;
  postId: number;
  // type: FileType;
} & Base;
