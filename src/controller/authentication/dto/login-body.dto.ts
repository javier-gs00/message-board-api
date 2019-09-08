import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class LoginBody {
  @ApiModelProperty()
  @IsString()
  username: string;

  @ApiModelProperty()
  @IsString()
  password: string;
}
