import { IsString, IsNumber } from 'class-validator';

export class CreatePostBody {
  @IsString()
  title: string;

  @IsNumber()
  userId: number;
}
