import { Module } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { RoleRepository } from '../../repository/role.repository';

@Module({
  controllers: [RoleController],
  providers: [RoleService, RoleRepository],
})
export class RolesModule {}
