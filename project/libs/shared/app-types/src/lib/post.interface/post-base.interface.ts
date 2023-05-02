// import { PostTypeEnum, PostStatusEnum } from '../post.enum';

export interface PostBase {
  _id?: string;
  userId: string;
  authorUserId: string;
  creationDate: number;
  publicationDate: number;
  likesCount: number;
  commentsCount: number;
  type: string;
  status: string;
  isReposted: boolean;
  tags?: string[];
}
