import { BlogPostBaseRdo } from './blog-post-base.rdo';
import { Expose } from 'class-transformer';

export class BlogPostPhotoRdo extends BlogPostBaseRdo {
  @Expose()
  public photo: string;
}
