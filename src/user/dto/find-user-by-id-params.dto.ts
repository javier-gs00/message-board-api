import { IsNumberString } from 'class-validator';

export class FindUserByIdParams {
  @IsNumberString()
  id: number;
}
