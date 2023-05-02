import { BlogPostBaseRdo } from './blog-post-base.rdo';
import { Expose } from 'class-transformer';

export class BlogPostTextRdo extends BlogPostBaseRdo {
  @Expose()
  public title: string;

  @Expose()
  public announcement: string;

  @Expose()
  public text: string;
}
