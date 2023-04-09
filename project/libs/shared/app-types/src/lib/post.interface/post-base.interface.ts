import { PostTypeEnum, PostStatusEnum } from '../post.enum';

export interface PostBase {
  _id?: string;
  userId: string;
  authorUserId: string;
  creationDate: number;
  publicationDate: number;
  likesCount: number;
  commentsCount: number;
  type: PostTypeEnum;
  status: PostStatusEnum;
  isReposted: boolean;
  tags?: string[];
}
