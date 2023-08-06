import {Base} from './base';

export type Destination = {
  name: string;
  address: string;
  tourId: number;
  departureTime: Date;
  content: string;
} & Base;
