import {
  CreatePostLinkDto,
  CreatePostPhotoDto,
  CreatePostQuoteDto,
  CreatePostTextDto,
  CreatePostVideoDto,
} from './dto/create-post.dto';
import {
  BlogPostLinkEntity,
  BlogPostPhotoEntity,
  BlogPostQuoteEntity,
  BlogPostTextEntity,
  BlogPostVideoEntity,
} from './blog-post.entity';

export const PostConnectionsTypes = [
  {
    type: 'Text',
    dto: CreatePostTextDto,
    //   rdo: PostTextRdo,
    entity: BlogPostTextEntity,
  },
  {
    type: 'Video',
    dto: CreatePostVideoDto,
    //   rdo: PostVideoRdo,
    entity: BlogPostVideoEntity,
  },
  {
    type: 'Photo',
    dto: CreatePostPhotoDto,
    //   rdo: PostPhotoRdo,
    entity: BlogPostPhotoEntity,
  },
  {
    type: 'Quote',
    dto: CreatePostQuoteDto,
    //   rdo: PostQuoteRdo,
    entity: BlogPostQuoteEntity,
  },
  {
    type: 'Link',
    dto: CreatePostLinkDto,
    //   rdo: PostLinkRdo,
    entity: BlogPostLinkEntity,
  },
];
