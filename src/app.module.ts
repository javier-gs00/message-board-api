import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'message_board',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    RolesModule,
    UserModule,
    PostModule,
  ],
})
export class AppModule implements OnModuleInit {
  public port: number;
  private isAuthEnabled: boolean;

  constructor(config: ConfigService) {
    this.isAuthEnabled = config.isAuthEnabled;
    this.port = config.port;
  }

  onModuleInit() {
    console.log('[AppModule] Custom init message');
    console.log({ auth: this.isAuthEnabled });
  }
}
