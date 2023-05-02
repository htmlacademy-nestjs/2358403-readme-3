import { CommentStatusEnum } from './comment-status.enum';

export interface Comment {
  _id?: string;
  userId: string;
  postId: string;
  text: string;
  status?: CommentStatusEnum;
  createdAt?: number;
  publishedAt?: number;
  updatedAt?: number;
}
