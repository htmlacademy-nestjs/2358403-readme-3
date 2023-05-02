import { ApiProperty } from '@nestjs/swagger';

export class CreatePostCommentDto {
  @ApiProperty({
    description: 'User id',
    example: '00000000-0000-0000-0000-000000000001',
  })
  public userId: string;

  @ApiProperty({
    description: 'Post id',
    example: '00000000-0000-0000-0000-000000000001',
  })
  public postId: string;

  @ApiProperty({
    description: 'Comment text',
    example: 'Lorem input...',
  })
  public text: string;
}
