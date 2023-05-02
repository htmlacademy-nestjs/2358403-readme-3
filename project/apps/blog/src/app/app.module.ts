import { Module } from '@nestjs/common';
import { BlogPostModule } from './blog-post/blog-post.module';
import { BlogPostCommentModule } from './blog-post-comment/blog-post-comment.module';
import { BlogPostLikeModule } from './blog-post-like/blog-post-like.module';

@Module({
  imports: [BlogPostModule, BlogPostCommentModule, BlogPostLikeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
