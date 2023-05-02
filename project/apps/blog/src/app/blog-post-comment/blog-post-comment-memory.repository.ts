import { CRUDRepository } from '@project/util/util-types';
import { BlogPostCommentEntity } from './blog-post-comment.entity';
import { Comment } from '@project/shared/app-types';
import { Injectable } from '@nestjs/common';
import crypto from 'crypto';

@Injectable()
export class BlogPostCommentMemoryRepository
  implements CRUDRepository<BlogPostCommentEntity, string, Comment>
{
  private repository: { [key: string]: Comment } = {};

  public async create(item: BlogPostCommentEntity): Promise<Comment> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID() };
    this.repository[entry._id] = entry;

    return { ...entry };
  }

  public async findById(id: string): Promise<Comment> {
    if (this.repository[id]) {
      return { ...this.repository[id] };
    }

    return null;
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(
    id: string,
    item: BlogPostCommentEntity
  ): Promise<Comment> {
    this.repository[id] = { ...item.toObject(), _id: id };
    return this.findById(id);
  }
}
