import { CreatePostBaseDto } from './create-post-base.dto';

export class CreatePostPhotoDto extends CreatePostBaseDto {
  public photo: string;
}
