import { BlogPostVideoEntity } from './blog-post-video.entity';
import { BlogPostTextEntity } from './blog-post-text.entity';
import { BlogPostQuoteEntity } from './blog-post-quote.entity';
import { BlogPostPhotoEntity } from './blog-post-photo.entity';
import { BlogPostLinkEntity } from './blog-post-link.entity';
import { BlogPostBaseEntity } from './blog-post-base.entity';

export type PostEntity =
  | BlogPostBaseEntity
  | BlogPostVideoEntity
  | BlogPostTextEntity
  | BlogPostQuoteEntity
  | BlogPostPhotoEntity
  | BlogPostLinkEntity;

export {
  BlogPostBaseEntity,
  BlogPostLinkEntity,
  BlogPostPhotoEntity,
  BlogPostQuoteEntity,
  BlogPostTextEntity,
  BlogPostVideoEntity,
};
