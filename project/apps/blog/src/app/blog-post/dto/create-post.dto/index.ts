import { CreatePostBaseDto } from './create-post-base.dto';
import { CreatePostLinkDto } from './create-post-link.dto';
import { CreatePostPhotoDto } from './create-post-photo.dto';
import { CreatePostQuoteDto } from './create-post-quote.dto';
import { CreatePostTextDto } from './create-post-text.dto';
import { CreatePostVideoDto } from './create-post-video.dto';

export {
  CreatePostBaseDto,
  CreatePostLinkDto,
  CreatePostPhotoDto,
  CreatePostQuoteDto,
  CreatePostTextDto,
  CreatePostVideoDto,
};

export type CreatePostDto =
  | CreatePostBaseDto
  | CreatePostVideoDto
  | CreatePostTextDto
  | CreatePostQuoteDto
  | CreatePostPhotoDto
  | CreatePostLinkDto;
