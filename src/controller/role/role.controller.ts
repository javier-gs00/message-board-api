import { Controller, Get, HttpException } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from '../../entity/role.entity';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('Role')
@Controller('role')
export class RoleController {
  constructor(private readonly rolesService: RoleService) {}

  @Get()
  findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }
}
