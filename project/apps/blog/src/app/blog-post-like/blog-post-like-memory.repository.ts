import { CRUDRepository } from '@project/util/util-types';
import { BlogPostLikeEntity } from './blog-post-like.entity';
import { Like } from '@project/shared/app-types';
import { Injectable } from '@nestjs/common';
import crypto from 'crypto';

@Injectable()
export class BlogPostLikeMemoryRepository
  implements CRUDRepository<BlogPostLikeEntity, string, Like>
{
  private repository: { [key: string]: Like } = {};

  public async create(item: BlogPostLikeEntity): Promise<Like> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID() };
    this.repository[entry._id] = entry;

    return { ...entry };
  }

  public async findById(id: string): Promise<Like> {
    if (this.repository[id]) {
      return { ...this.repository[id] };
    }

    return null;
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: BlogPostLikeEntity): Promise<Like> {
    this.repository[id] = { ...item.toObject(), _id: id };
    return this.findById(id);
  }
}
