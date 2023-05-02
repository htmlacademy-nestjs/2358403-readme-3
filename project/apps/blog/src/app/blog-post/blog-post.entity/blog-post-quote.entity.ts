import { PostQuote } from '@project/shared/app-types';
import { BlogPostBaseEntity } from './blog-post-base.entity';

export class BlogPostQuoteEntity
  extends BlogPostBaseEntity
  implements PostQuote
{
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
