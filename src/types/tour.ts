import {Base} from './base';
import {Destination} from './destination';

export type Tour = {
  name: string;
  description: string;
  isProgress: boolean;
  destinations: Destination[];
} & Base;
