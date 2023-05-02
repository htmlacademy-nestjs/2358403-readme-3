import { BlogPostBaseRdo } from './blog-post-base.rdo';
import { Expose } from 'class-transformer';

export class BlogPostVideoRdo extends BlogPostBaseRdo {
  @Expose()
  public title: string;

  @Expose()
  public link: string;
}
