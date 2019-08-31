import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(
    firstName: string,
    lastName: string,
    roleId: number,
  ): Promise<User> {
    const user = this.userRepository.create({
      firstName,
      lastName,
      roleId,
    });
    return this.userRepository.save(user);
  }

  async findById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findUserPosts(userId: number): Promise<any> {
    const usersWithPosts = await this.userRepository
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.posts', 'post')
      .where('user.id = :id', { id: userId })
      .getOne();

    return usersWithPosts;
  }
}
