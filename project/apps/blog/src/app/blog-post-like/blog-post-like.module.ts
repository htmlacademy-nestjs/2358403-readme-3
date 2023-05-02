import { Module } from '@nestjs/common';
import { BlogPostLikeController } from './blog-post-like.controller';
import { BlogPostLikeService } from './blog-post-like.service';
import { BlogPostLikeMemoryRepository } from './blog-post-like-memory.repository';

@Module({
  controllers: [BlogPostLikeController],
  providers: [BlogPostLikeService, BlogPostLikeMemoryRepository],
  exports: [BlogPostLikeMemoryRepository],
})
export class BlogPostLikeModule {}
