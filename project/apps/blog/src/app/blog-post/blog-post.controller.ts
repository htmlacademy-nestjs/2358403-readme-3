import { Body, Controller, Post } from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { CreatePostDto } from './dto/create-post.dto';
import {
  BlogPostBaseRdo,
  BlogPostVideoRdo,
  BlogPostTextRdo,
  BlogPostQuoteRdo,
  BlogPostPhotoRdo,
  BlogPostLinkRdo,
} from './rdo';
import { fillObject } from '@project/util/util-core';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('blog-post')
@Controller('blog-post')
export class BlogPostController {
  constructor(private readonly blogPostService: BlogPostService) {}

  @ApiResponse({
    type: BlogPostBaseRdo,
  })
  @Post('create')
  public async create(
    @Body()
    postData: CreatePostDto
  ) {
    const newPost = await this.blogPostService.create(postData);

    if (newPost.type === 'video') {
      return fillObject(BlogPostVideoRdo, newPost);
    } else if (newPost.type === 'text') {
      return fillObject(BlogPostTextRdo, newPost);
    } else if (newPost.type === 'quote') {
      return fillObject(BlogPostQuoteRdo, newPost);
    } else if (newPost.type === 'photo') {
      return fillObject(BlogPostPhotoRdo, newPost);
    } else if (newPost.type === 'link') {
      return fillObject(BlogPostLinkRdo, newPost);
    } else {
      return fillObject(BlogPostBaseRdo, newPost);
    }
  }
}
