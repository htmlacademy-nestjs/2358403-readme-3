import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class BlogPostLikeRdo {
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
    description: 'Created at',
    example: '1682776280000',
  })
  @Expose()
  public createdAt: number;

  @ApiProperty({
    description: 'Updated at',
    example: '1682776280000',
  })
  @Expose()
  public updatedAt: number;
}
