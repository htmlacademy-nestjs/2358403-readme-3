import { ApiProperty } from '@nestjs/swagger';

export class CreatePostLikeDto {
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
}
