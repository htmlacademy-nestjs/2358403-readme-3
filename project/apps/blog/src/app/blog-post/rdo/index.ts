import { BlogPostBaseRdo } from './blog-post-base.rdo';
import { BlogPostVideoRdo } from './blog-post-video.rdo';
import { BlogPostTextRdo } from './blog-post-text.rdo';
import { BlogPostPhotoRdo } from './blog-post-photo.rdo';
import { BlogPostQuoteRdo } from './blog-post-quote.rdo';
import { BlogPostLinkRdo } from './blog-post-link.rdo';

export {
  BlogPostBaseRdo,
  BlogPostVideoRdo,
  BlogPostTextRdo,
  BlogPostPhotoRdo,
  BlogPostQuoteRdo,
  BlogPostLinkRdo,
};

export type BlogPostRdo =
  | BlogPostBaseRdo
  | BlogPostVideoRdo
  | BlogPostTextRdo
  | BlogPostQuoteRdo
  | BlogPostLinkRdo
  | BlogPostPhotoRdo;
