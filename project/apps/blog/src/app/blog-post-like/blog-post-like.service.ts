import { Injectable } from '@nestjs/common';
import { BlogPostLikeMemoryRepository } from './blog-post-like-memory.repository';
import { CreatePostLikeDto } from './dto/create-post-like.dto';
import { BlogPostLikeEntity } from './blog-post-like.entity';

@Injectable()
export class BlogPostLikeService {
  constructor(
    private readonly blogPostLikeRepository: BlogPostLikeMemoryRepository
  ) {}

  public async create(dto: CreatePostLikeDto) {
    const blogPostEntity = new BlogPostLikeEntity(dto);
    blogPostEntity.setCreationDate();
    blogPostEntity.setUpdateDate();

    return this.blogPostLikeRepository.create(blogPostEntity);
  }
}
