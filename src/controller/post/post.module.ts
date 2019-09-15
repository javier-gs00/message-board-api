import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PostRepository } from '../../repository/post.repository';
import { AuthMiddleware } from '../../middleware/auth.middleware';

@Module({
  controllers: [PostController],
  providers: [PostService, PostRepository],
})
export class PostModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(PostController);
  }
}
