import { Injectable } from '@nestjs/common';
import { Repository, Connection, getConnection } from 'typeorm';
import { Role } from '../entity/role.entity';

@Injectable()
export class RoleRepository {
  roleRepository: Repository<Role>;

  constructor(connection: Connection) {
    this.roleRepository = connection.getRepository(Role);
  }

  findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }
}
