// import { PostTypeEnum, PostStatusEnum } from '@project/shared/app-types';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePostBaseDto {
  @ApiProperty({
    description: 'Post type',
    example: 'video',
  })
  public type: string;

  @ApiProperty({
    description: 'Post status',
    example: 'draft',
  })
  public status: string;

  @ApiProperty({
    description: 'Post tags',
    example: 'tag1',
  })
  public tags?: string[];
}
