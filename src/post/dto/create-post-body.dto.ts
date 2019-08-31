import { IsString, IsNumber } from 'class-validator';

export class CreatePostBodyDto {
  @IsString()
  title: string;

  @IsNumber()
  userId: number;
}
