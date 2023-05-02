import { CreatePostBaseDto } from './create-post-base.dto';

export class CreatePostLinkDto extends CreatePostBaseDto {
  public link: string;
  public description?: string;
}
