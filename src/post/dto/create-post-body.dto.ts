import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreatePostBody {
  @ApiModelProperty()
  @IsString()
  title: string;

  @ApiModelProperty()
  @IsNumber()
  userId: number;
}
