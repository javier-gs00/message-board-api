import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { RolesModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [PostModule, RolesModule, UserModule, AuthenticationModule],
})
export class ControllerModule {}
