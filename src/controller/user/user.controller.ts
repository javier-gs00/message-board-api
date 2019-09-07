import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserBody } from './dto/create-user.dto';
import { UserIdParams } from './dto/user-id-params.dto';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserBody): Promise<any> {
    const { firstName, lastName, roleId } = createUserDto;
    return this.userService.create(firstName, lastName, roleId);
  }

  @Get(':id')
  findUserById(@Param() findUserByIdParams: UserIdParams): Promise<any> {
    const { id } = findUserByIdParams;
    return this.userService.findById(id);
  }

  @Get(':id/post')
  findPostsByUserId(
    @Param() findPostsByUserIdParams: UserIdParams,
  ): Promise<any> {
    const { id } = findPostsByUserIdParams;
    return this.userService.findUserPosts(id);
  }
}
