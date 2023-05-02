import { CreatePostBaseDto } from './create-post-base.dto';

export class CreatePostVideoDto extends CreatePostBaseDto {
  public title: string;
  public link: string;
}
