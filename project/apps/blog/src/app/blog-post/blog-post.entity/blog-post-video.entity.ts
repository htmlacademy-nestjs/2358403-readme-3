import { PostVideo } from '@project/shared/app-types';
import { BlogPostBaseEntity } from './blog-post-base.entity';

export class BlogPostVideoEntity
  extends BlogPostBaseEntity
  implements PostVideo
{
  public title: string;
  public link: string;

  constructor(blogPost: PostVideo) {
    super(blogPost);
    this.fillEntity(blogPost);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(blogPost: PostVideo) {
    this.title = blogPost.title;
    this.link = blogPost.link;
  }
}
