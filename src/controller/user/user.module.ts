import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from '../../repository/user.repository';
import { AuthMiddleware } from '../../middleware/auth.middleware';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, AuthMiddleware],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(UserController);
  }
}
