import { Expose } from 'class-transformer';
import { CommentStatusEnum } from '@project/shared/app-types';
import { ApiProperty } from '@nestjs/swagger';

export class BlogPostCommentRdo {
  @Expose({ name: '_id' })
  public id: string;

  @ApiProperty({
    description: 'User id',
    example: '00000000-0000-0000-0000-000000000001',
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: 'Post id',
    example: '00000000-0000-0000-0000-000000000001',
  })
  @Expose()
  public postId: string;

  @ApiProperty({
    description: 'Comment text',
    example: 'Lorem input...',
  })
  @Expose()
  public text: number;

  @ApiProperty({
    description: 'Comment status',
    example: 'moderation',
  })
  @Expose()
  public status: CommentStatusEnum;

  @ApiProperty({
    description: 'Created at',
    example: '1682776280000',
  })
  @Expose()
  public createdAt: number;

  @ApiProperty({
    description: 'Published at',
    example: '1682776280000',
  })
  @Expose()
  public publishedAt: number;

  @ApiProperty({
    description: 'Updated at',
    example: '1682776280000',
  })
  @Expose()
  public updatedAt: number;
}
