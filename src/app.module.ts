import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { ControllerModule } from './controller/controller.module';
import { RepositoryModule } from './repository/repository.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        // workaround for matching the database type in the configuration options
        let type;
        switch (config.dbType) {
          case 'mysql':
            type = 'mysql';
            break;
          case 'sqlite':
            type = 'sqlite';
            break;
          default:
            type = 'mysql';
        }

        return {
          type,
          host: config.dbHost,
          port: config.dbPort,
          username: config.dbUsername,
          password: config.dbPassword,
          database: config.dbDatabase,
          entities: [__dirname + '/**/*.entity{.ts,.js}'],
          synchronize: false,
        };
      },
      inject: [ConfigService],
    }),
    RepositoryModule,
    ControllerModule,
    AuthModule,
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
