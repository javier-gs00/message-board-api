import { Controller, Get, HttpException } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from '../entity/role.entity';

@Controller('roles')
export class RoleController {
  constructor(private readonly rolesService: RoleService) {}

  @Get()
  async findAll(): Promise<Role[]> {
    try {
      return this.rolesService.findAll();
    } catch (error) {
      console.log(error);
      throw new HttpException('internal server error', 500);
    }
  }
}
