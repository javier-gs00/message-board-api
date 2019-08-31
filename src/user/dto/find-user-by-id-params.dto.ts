import { IsNumberString } from 'class-validator';

export class FindUserByIdParamsDto {
  @IsNumberString()
  id: number;
}
