import { Module, Global } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { RoleRepository } from './role.repository';
import { UserRepository } from './user.repository';

@Global()
@Module({
  providers: [PostRepository, RoleRepository, UserRepository],
  exports: [PostRepository, RoleRepository, UserRepository],
})
export class RepositoryModule {}
