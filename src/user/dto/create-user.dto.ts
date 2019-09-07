import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserBody {
  @ApiModelProperty()
  @IsString()
  firstName: string;

  @ApiModelProperty()
  @IsString()
  lastName: string;

  @ApiModelProperty()
  @IsNumber()
  roleId: number;
}
