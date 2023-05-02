import { Comment, CommentStatusEnum } from '@project/shared/app-types';

export class BlogPostCommentEntity implements Comment {
  public _id?: string;
  public userId: string;
  public postId: string;
  public text: string;
  public status?: CommentStatusEnum;
  public createdAt?: number;
  public publishedAt?: number;
  public updatedAt?: number;

  constructor(blogPost: Comment) {
    this.fillEntity(blogPost);
  }

  public toObject() {
    return { ...this };
  }

  public fillEntity(blogPost: Comment) {
    this._id = blogPost._id;
    this.userId = blogPost.userId;
    this.postId = blogPost.postId;
    this.text = blogPost.text;
    this.status = blogPost.status;
    this.createdAt = blogPost.createdAt;
    this.publishedAt = blogPost.publishedAt;
    this.updatedAt = blogPost.updatedAt;
  }

  public setCreationDate() {
    this.createdAt = Date.now();
  }

  public setUpdateDate() {
    this.updatedAt = Date.now();
  }

  public setPublicationDate() {
    this.publishedAt = Date.now();
  }
}
