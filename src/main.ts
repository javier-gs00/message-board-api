import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { morganLogger } from './middleware/morgan.middleware';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(morganLogger);
  const port = app.get('ConfigService').port;
  await app.listen(port);
  console.log(`App listening on port ${port}`);
}
bootstrap();
