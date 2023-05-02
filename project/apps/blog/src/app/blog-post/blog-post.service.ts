import { Injectable } from '@nestjs/common';
import { BlogPostMemoryRepository } from './blog-post-memory.repository';
import {
  BlogPostVideoEntity,
  BlogPostTextEntity,
  BlogPostQuoteEntity,
  BlogPostLinkEntity,
  BlogPostPhotoEntity,
} from './blog-post.entity';
import {
  CreatePostDto,
  CreatePostVideoDto,
  CreatePostTextDto,
  CreatePostQuoteDto,
  CreatePostLinkDto,
  CreatePostPhotoDto,
} from './dto/create-post.dto';
import {
  PostBase,
  PostQuote,
  PostText,
  PostVideo,
  PostLink,
  PostPhoto,
} from '@project/shared/app-types';

@Injectable()
export class BlogPostService {
  constructor(private readonly blogPostRepository: BlogPostMemoryRepository) {}

  public async create(postData: CreatePostDto) {
    const blogPostBase: PostBase = {
      userId: '',
      authorUserId: '',
      creationDate: Date.now(),
      publicationDate: Date.now(),
      likesCount: 0,
      commentsCount: 0,
      isReposted: false,
      type: postData.type,
      status: postData.status,
      tags: postData.tags,
    };

    let postEntity;

    if (postData.type === 'video') {
      const { title, link } = postData as CreatePostVideoDto;

      const blogPost: PostVideo = {
        ...blogPostBase,
        title,
        link,
      };

      postEntity = new BlogPostVideoEntity(blogPost);
    }

    if (postData.type === 'text') {
      const { title, announcement, text } = postData as CreatePostTextDto;

      const blogPost: PostText = {
        ...blogPostBase,
        title,
        announcement,
        text,
      };

      postEntity = new BlogPostTextEntity(blogPost);
    }

    if (postData.type === 'quote') {
      const { quote, author } = postData as CreatePostQuoteDto;

      const blogPost: PostQuote = {
        ...blogPostBase,
        quote,
        author,
      };

      postEntity = new BlogPostQuoteEntity(blogPost);
    }

    if (postData.type === 'photo') {
      const { photo } = postData as CreatePostPhotoDto;

      const blogPost: PostPhoto = {
        ...blogPostBase,
        photo,
      };

      postEntity = new BlogPostPhotoEntity(blogPost);
    }

    if (postData.type === 'link') {
      const { link, description } = postData as CreatePostLinkDto;

      const blogPost: PostLink = {
        ...blogPostBase,
        link,
        description,
      };

      postEntity = new BlogPostLinkEntity(blogPost);
    }

    return this.blogPostRepository.create(postEntity);
  }
}
