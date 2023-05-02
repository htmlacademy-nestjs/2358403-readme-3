import { PostText } from '@project/shared/app-types';
import { BlogPostBaseEntity } from './blog-post-base.entity';

export class BlogPostTextEntity extends BlogPostBaseEntity implements PostText {
  public title: string;
  public announcement: string;
  public text: string;

  constructor(blogPost: PostText) {
    super(blogPost);
    this.fillEntity(blogPost);
  }

  public fillEntity(blogPost: PostText) {
    this.title = blogPost.title;
    this.announcement = blogPost.announcement;
    this.text = blogPost.text;
  }
}
