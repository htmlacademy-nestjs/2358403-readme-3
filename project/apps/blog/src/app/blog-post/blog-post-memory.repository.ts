import { CRUDRepository } from '@project/util/util-types';
import { BlogPostEntity } from './blog-post.entity';
import { Post } from '@project/shared/app-types';
import { Injectable } from '@nestjs/common';
import crypto from 'crypto';

@Injectable()
export class BlogPostMemoryRepository
  implements CRUDRepository<BlogPostEntity, string, Post>
{
  private repository: { [key: string]: Post } = {};

  public async create(item: BlogPostEntity): Promise<Post> {
    const entry = { ...item.toObject(), _id: crypto.randomUUID() };
    this.repository[entry._id] = entry;

    return { ...entry };
  }

  public async findById(id: string): Promise<Post> {
    if (this.repository[id]) {
      return { ...this.repository[id] };
    }

    return null;
  }

  public async destroy(id: string): Promise<void> {
    delete this.repository[id];
  }

  public async update(id: string, item: BlogPostEntity): Promise<Post> {
    this.repository[id] = { ...item.toObject(), _id: id };
    return this.findById(id);
  }
}
