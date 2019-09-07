import { ApiModelProperty } from '@nestjs/swagger';
import { IsNumberString } from 'class-validator';

export class UserIdParams {
  @ApiModelProperty()
  @IsNumberString()
  id: number;
}
