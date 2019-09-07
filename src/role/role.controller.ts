import { Controller, Get, HttpException } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from '../entity/role.entity';

@Controller('roles')
export class RoleController {
  constructor(private readonly rolesService: RoleService) {}

  @Get()
  findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }
}
