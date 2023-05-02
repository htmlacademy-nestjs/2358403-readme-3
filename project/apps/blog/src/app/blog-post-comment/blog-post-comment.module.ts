import { Module } from '@nestjs/common';
import { BlogPostCommentController } from './blog-post-comment.controller';
import { BlogPostCommentService } from './blog-post-comment.service';
import { BlogPostCommentMemoryRepository } from './blog-post-comment-memory.repository';

@Module({
  controllers: [BlogPostCommentController],
  providers: [BlogPostCommentService, BlogPostCommentMemoryRepository],
  exports: [BlogPostCommentMemoryRepository],
})
export class BlogPostCommentModule {}
