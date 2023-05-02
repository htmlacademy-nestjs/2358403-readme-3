import { Like } from '@project/shared/app-types';

export class BlogPostLikeEntity implements Like {
  public _id?: string;
  public userId: string;
  public postId: string;
  public createdAt?: number;
  public updatedAt?: number;

  constructor(blogPost: Like) {
    this.fillEntity(blogPost);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(blogPost: Like) {
    this._id = blogPost._id;
    this.userId = blogPost.userId;
    this.postId = blogPost.postId;
    this.createdAt = blogPost.createdAt;
    this.updatedAt = blogPost.updatedAt;
  }

  public setCreationDate() {
    this.createdAt = Date.now();
  }

  public setUpdateDate() {
    this.updatedAt = Date.now();
  }
}
