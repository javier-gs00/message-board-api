import { IsString, IsNumber } from 'class-validator';

export class CreateUserBody {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  roleId: number;
}
