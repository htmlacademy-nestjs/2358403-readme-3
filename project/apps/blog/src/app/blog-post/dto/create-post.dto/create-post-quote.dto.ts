import { CreatePostBaseDto } from './create-post-base.dto';

export class CreatePostQuoteDto extends CreatePostBaseDto {
  public quote: string;
  public author: string;
}
