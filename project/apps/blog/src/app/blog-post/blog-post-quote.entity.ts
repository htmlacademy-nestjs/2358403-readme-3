import { PostQuote } from '@project/shared/app-types';
import { BlogPostEntity } from './blog-post.entity';

export class BlogPostQuoteEntity extends BlogPostEntity implements PostQuote {
  public quote: string;
  public author: string;

  constructor(blogPost: PostQuote) {
    super(blogPost);
    this.fillEntity(blogPost);
  }

  public fillEntity(blogPost: PostQuote) {
    this.quote = blogPost.quote;
    this.author = blogPost.author;
  }
}
