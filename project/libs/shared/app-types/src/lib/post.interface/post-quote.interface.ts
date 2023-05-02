import { PostBase } from './post-base.interface';

export interface PostQuote extends PostBase {
  quote: string;
  author: string;
}
