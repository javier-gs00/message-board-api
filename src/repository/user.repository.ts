import { Injectable } from '@nestjs/common';
import { Repository, Connection, getConnection } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserRepository {
  userRepository: Repository<User>;

  constructor(connection: Connection) {
    this.userRepository = connection.getRepository(User);
  }

  create(firstName: string, lastName: string, roleId: number): Promise<User> {
    const user = this.userRepository.create({
      firstName,
      lastName,
      roleId,
    });
    return this.userRepository.save(user);
  }

  findById(id: number): Promise<User> {
    // return this.userRepository.findOne({ where: { id } });
    return this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.role', 'role')
      .addSelect('role.name')
      .select(['user.firstName', 'user.lastName', 'role.name'])
      .getOne();
  }

  findUserPosts(userId: number): Promise<User> {
    return this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.posts', 'post')
      .where('user.id = :id', { id: userId })
      .getOne();
  }
}
