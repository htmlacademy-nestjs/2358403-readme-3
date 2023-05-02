import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { BlogPostLikeService } from './blog-post-like.service';
import { CreatePostLikeDto } from './dto/create-post-like.dto';
import { BlogPostLikeRdo } from './rdo/blog-post-like.rdo';
import { fillObject } from '@project/util/util-core';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('blog-post-like')
@Controller('blog-post-like')
export class BlogPostLikeController {
  constructor(private readonly blogPostCommentService: BlogPostLikeService) {}

  @ApiResponse({
    type: BlogPostLikeRdo,
    status: HttpStatus.CREATED,
    description: 'Like created successfully.',
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto: CreatePostLikeDto) {
    const newBlogPostLike = await this.blogPostCommentService.create(dto);
    return fillObject(BlogPostLikeRdo, newBlogPostLike);
  }
}
