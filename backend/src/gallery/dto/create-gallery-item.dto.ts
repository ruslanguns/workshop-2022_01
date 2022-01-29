import { IsString } from 'class-validator';

export class CreateGalleryItem {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  imageUrl: string;
}
