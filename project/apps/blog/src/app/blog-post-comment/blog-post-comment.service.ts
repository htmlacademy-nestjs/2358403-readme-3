import { Injectable } from '@nestjs/common';
import { BlogPostCommentMemoryRepository } from './blog-post-comment-memory.repository';
import { CreatePostCommentDto } from './dto';
import { CommentStatusEnum } from '@project/shared/app-types';
import { BlogPostCommentEntity } from './blog-post-comment.entity';

@Injectable()
export class BlogPostCommentService {
  constructor(
    private readonly blogPostCommentRepository: BlogPostCommentMemoryRepository
  ) {}

  public async create(dto: CreatePostCommentDto) {
    const blogPostComment = {
      ...dto,
      status: CommentStatusEnum.Moderation,
    };

    const blogPostEntity = new BlogPostCommentEntity(blogPostComment);
    blogPostEntity.setCreationDate();
    blogPostEntity.setUpdateDate();

    return this.blogPostCommentRepository.create(blogPostEntity);
  }

  public async findById(id: string) {
    return this.blogPostCommentRepository.findById(id);
  }

  public async update(id: string, dto: CreatePostCommentDto) {
    const blogPostEntity = new BlogPostCommentEntity(dto);
    blogPostEntity.setUpdateDate();

    return this.blogPostCommentRepository.update(id, blogPostEntity);
  }

  public async delete(id: string) {
    return this.blogPostCommentRepository.destroy(id);
  }
}
