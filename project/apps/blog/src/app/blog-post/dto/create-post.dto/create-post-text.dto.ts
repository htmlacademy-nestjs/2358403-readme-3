import { CreatePostBaseDto } from './create-post-base.dto';

export class CreatePostTextDto extends CreatePostBaseDto {
  public title: string;
  public announcement: string;
  public text: string;
}
