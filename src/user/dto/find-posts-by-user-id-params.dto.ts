import { IsNumber, IsNumberString } from 'class-validator';

export class FindPostsByUserIdParams {
  @IsNumberString()
  id: number;
}
