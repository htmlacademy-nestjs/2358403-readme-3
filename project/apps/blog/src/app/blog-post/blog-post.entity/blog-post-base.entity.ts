import {
  PostBase,
  // PostTypeEnum,
  // PostStatusEnum,
} from '@project/shared/app-types';

export class BlogPostBaseEntity implements PostBase {
  public _id: string;
  public userId: string;
  public authorUserId: string;
  public creationDate: number;
  public publicationDate: number;
  public likesCount: number;
  public commentsCount: number;
  public type: string;
  public status: string;
  public isReposted: boolean;
  public tags?: string[];

  constructor(blogPost: PostBase) {
    // this.fillEntity(blogPost);
    this._id = blogPost._id;
    this.userId = blogPost.userId;
    this.authorUserId = blogPost.authorUserId;
    this.creationDate = blogPost.creationDate;
    this.publicationDate = blogPost.publicationDate;
    this.likesCount = blogPost.likesCount;
    this.commentsCount = blogPost.commentsCount;
    this.type = blogPost.type;
    this.status = blogPost.status;
    this.isReposted = blogPost.isReposted;
    this.tags = blogPost.tags;
  }

  public toObject() {
    return { ...this };
  }

  // public fillEntity(blogPost: PostBase) {
  //   this._id = blogPost._id;
  //   this.userId = blogPost.userId;
  //   this.authorUserId = blogPost.authorUserId;
  //   this.creationDate = blogPost.creationDate;
  //   this.publicationDate = blogPost.publicationDate;
  //   this.likesCount = blogPost.likesCount;
  //   this.commentsCount = blogPost.commentsCount;
  //   this.type = blogPost.type;
  //   this.status = blogPost.status;
  //   this.isReposted = blogPost.isReposted;
  //   this.tags = blogPost.tags;
  // }

  public setCreationDate() {
    this.creationDate = Date.now();
    return this;
  }

  public setPublicationDate() {
    this.publicationDate = Date.now();
    return this;
  }
}
