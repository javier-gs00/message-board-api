import { Injectable } from '@nestjs/common';
import { User } from '../../entity/user.entity';
import { UserRepository } from '../../repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  create(firstName: string, lastName: string, roleId: number): Promise<User> {
    return this.userRepository.create(firstName, lastName, roleId);
  }

  findById(id: number): Promise<User> {
    return this.userRepository.findById(id);
  }

  findUserPosts(userId: number): Promise<User> {
    return this.userRepository.findUserPosts(userId);
  }
}
