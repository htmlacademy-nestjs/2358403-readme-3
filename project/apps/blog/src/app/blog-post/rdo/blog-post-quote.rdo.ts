import { Expose } from 'class-transformer';
import { BlogPostBaseRdo } from './blog-post-base.rdo';

export class BlogPostQuoteRdo extends BlogPostBaseRdo {
  @Expose()
  public quote: string;

  @Expose()
  public author: string;
}
