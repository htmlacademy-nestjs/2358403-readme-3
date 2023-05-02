import { PostBase } from './post-base.interface';
import { PostVideo } from './post-video.interface';
import { PostText } from './post-text.interface';
import { PostQuote } from './post-quote.interface';
import { PostPhoto } from './post-photo.interface';
import { PostLink } from './post-link.interface';

export { PostBase, PostVideo, PostText, PostQuote, PostPhoto, PostLink };

export type Post =
  | PostBase
  | PostVideo
  | PostText
  | PostQuote
  | PostPhoto
  | PostLink;
