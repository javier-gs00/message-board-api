import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserBody } from './dto/create-user.dto';
import { FindUserByIdParams } from './dto/find-user-by-id-params.dto';
import { FindPostsByUserIdParams } from './dto/find-posts-by-user-id-params.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserBody): Promise<any> {
    const { firstName, lastName, roleId } = createUserDto;
    return this.userService.create(firstName, lastName, roleId);
  }

  @Get(':id')
  findUserById(
    @Param() findUserByIdParamsDto: FindUserByIdParams,
  ): Promise<any> {
    const { id } = findUserByIdParamsDto;
    return this.userService.findById(id);
  }

  @Get(':id/posts')
  findPostsByUserId(
    @Param() findPostsByUserIdParamsDto: FindPostsByUserIdParams,
  ): Promise<any> {
    const { id } = findPostsByUserIdParamsDto;
    return this.userService.findUserPosts(id);
  }
}
