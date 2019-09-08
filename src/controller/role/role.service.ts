import { Injectable } from '@nestjs/common';
import { Role } from '../../entity/role.entity';
import { RoleRepository } from '../../repository/role.repository';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  findAll(): Promise<Role[]> {
    return this.roleRepository.findAll();
  }
}
