import {Base} from './base';

export enum FileType {
  IMAGE,
  FILE,
}

export type File = {
  link: string;
  type: FileType;
} & Base;
