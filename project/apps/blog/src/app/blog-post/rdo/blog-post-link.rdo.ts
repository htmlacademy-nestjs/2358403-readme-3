import { Expose } from 'class-transformer';
import { BlogPostBaseRdo } from './blog-post-base.rdo';

export class BlogPostLinkRdo extends BlogPostBaseRdo {
  @Expose()
  public link: string;

  @Expose()
  public description?: string;
}
