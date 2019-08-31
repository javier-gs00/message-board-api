import { IsNumber, IsNumberString } from 'class-validator';

export class FindPostsByUserIdParamsDto {
  @IsNumberString()
  id: number;
}
