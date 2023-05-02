import { PostPhoto } from '@project/shared/app-types';
import { BlogPostBaseEntity } from './blog-post-base.entity';

export class BlogPostPhotoEntity
  extends BlogPostBaseEntity
  implements PostPhoto
{
  public photo: string;

  constructor(blogPost: PostPhoto) {
    super(blogPost);
    this.fillEntity(blogPost);
  }

  public fillEntity(blogPost: PostPhoto) {
    this.photo = blogPost.photo;
  }
}
