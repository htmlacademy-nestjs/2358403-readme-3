import { PostLink } from '@project/shared/app-types';
import { BlogPostBaseEntity } from './blog-post-base.entity';

export class BlogPostLinkEntity extends BlogPostBaseEntity implements PostLink {
  public link: string;
  public description?: string;

  constructor(blogPost: PostLink) {
    super(blogPost);
    this.fillEntity(blogPost);
  }

  public fillEntity(blogPost: PostLink) {
    this.link = blogPost.link;
    this.description = blogPost.description;
  }
}
