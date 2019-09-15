import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { RoleRepository } from '../../repository/role.repository';
import { AuthMiddleware } from '../../middleware/auth.middleware';

@Module({
  controllers: [RoleController],
  providers: [RoleService, RoleRepository],
})
export class RolesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(RoleController);
  }
}
