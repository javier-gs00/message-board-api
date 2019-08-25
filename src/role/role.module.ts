import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesController } from './role.controller';
import { RoleService } from './role.service';
import { Role } from '../entity/role.entity';

@Module({
  // register repositories to use in the current scope
  imports: [TypeOrmModule.forFeature([Role])],
  providers: [RoleService],
  controllers: [RolesController],
})
export class RolesModule {}
