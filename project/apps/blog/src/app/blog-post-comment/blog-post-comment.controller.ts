import {
  Get,
  Put,
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Delete,
} from '@nestjs/common';
import { BlogPostCommentService } from './blog-post-comment.service';
import { CreatePostCommentDto } from './dto/create-post-comment.dto';
import { BlogPostCommentRdo } from './rdo/blog-post-comment.rdo';
import { fillObject } from '@project/util/util-core';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('blog-post-comment')
@Controller('blog-post-comment')
export class BlogPostCommentController {
  constructor(
    private readonly blogPostCommentService: BlogPostCommentService
  ) {}

  @ApiResponse({
    type: BlogPostCommentRdo,
    status: HttpStatus.CREATED,
    description: 'Comment created successfully.',
  })
  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto: CreatePostCommentDto) {
    const newBlogPostComment = await this.blogPostCommentService.create(dto);
    return fillObject(BlogPostCommentRdo, newBlogPostComment);
  }

  @ApiResponse({
    type: BlogPostCommentRdo,
    status: HttpStatus.OK,
    description: 'Comment received successfully.',
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  public async findById(@Param('id') id: string) {
    const newBlogPostComment = await this.blogPostCommentService.findById(id);
    return fillObject(BlogPostCommentRdo, newBlogPostComment);
  }

  @ApiResponse({
    type: BlogPostCommentRdo,
    status: HttpStatus.OK,
    description: 'The comment has been updated successfully.',
  })
  @Put(':id')
  @HttpCode(HttpStatus.OK)
  public async update(
    @Param('id') id: string,
    @Body() dto: CreatePostCommentDto
  ) {
    const newBlogPostComment = await this.blogPostCommentService.update(
      id,
      dto
    );
    return fillObject(BlogPostCommentRdo, newBlogPostComment);
  }

  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'The comment has been deleted successfully.',
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id') id: string) {
    await this.blogPostCommentService.delete(id);
  }
}
