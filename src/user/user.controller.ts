import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserByIdParamsDto } from './dto/find-user-by-id-params.dto';
import { FindPostsByUserIdParamsDto } from './dto/find-posts-by-user-id-params.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { firstName, lastName, roleId } = createUserDto;
    return this.userService.create(firstName, lastName, roleId);
  }

  @Get(':id')
  async findUserById(@Param() findUserByIdParamsDto: FindUserByIdParamsDto) {
    const { id } = findUserByIdParamsDto;
    return this.userService.findById(id);
  }

  @Get(':id/posts')
  async findPostsByUserId(
    @Param() findPostsByUserIdParamsDto: FindPostsByUserIdParamsDto,
  ) {
    const { id } = findPostsByUserIdParamsDto;
    return this.userService.findUserPosts(id);
  }
}
