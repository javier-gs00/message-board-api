import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { ControllerModule } from './controller/controller.module';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        type: config.dbType as 'mysql',
        host: config.dbHost,
        port: config.dbPort,
        username: config.dbUsername,
        password: config.dbPassword,
        database: config.dbDatabase,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    RepositoryModule,
    ControllerModule,
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
