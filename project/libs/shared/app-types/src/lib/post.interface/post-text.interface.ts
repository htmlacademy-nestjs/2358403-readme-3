import { PostBase } from './post-base.interface';

export interface PostText extends PostBase {
  title: string;
  announcement: string;
  text: string;
}
