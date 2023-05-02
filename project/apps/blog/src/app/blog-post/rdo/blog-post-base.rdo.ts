import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { PostTypeEnum, PostStatusEnum } from '@project/shared/app-types';

export class BlogPostBaseRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '13',
  })
  @Expose({ name: '_id' })
  public id: string;

  @ApiProperty({
    description: 'The uniq user ID',
    example: '13',
  })
  @Expose()
  public userId: string;

  @ApiProperty({
    description: 'The uniq author ID',
    example: '13',
  })
  @Expose()
  public authorUserId: string;

  @ApiProperty({
    description: 'The creation date',
    example: '13',
  })
  @Expose()
  public creationDate: string;

  @ApiProperty({
    description: 'The publicationDate',
    example: '13',
  })
  @Expose()
  public publicationDate: string;

  @ApiProperty({
    description: 'The likesCount',
    example: '13',
  })
  @Expose()
  public likesCount: number;

  @ApiProperty({
    description: 'The commentsCount',
    example: '13',
  })
  @Expose()
  public commentsCount: number;

  @ApiProperty({
    description: 'The type',
    example: '13',
  })
  @Expose()
  public type: PostTypeEnum;

  @ApiProperty({
    description: 'The status',
    example: '13',
  })
  @Expose()
  public status: PostStatusEnum;

  @ApiProperty({
    description: 'The isReposted',
    example: '13',
  })
  @Expose()
  public isReposted: boolean;

  @ApiProperty({
    description: 'The tags',
    example: '13',
  })
  @Expose()
  public tags?: string[];
}
