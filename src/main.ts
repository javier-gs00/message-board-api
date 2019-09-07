import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { morganLogger } from './middleware/morgan.middleware';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Middleeware
  app.use(morganLogger);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      // strip extra keys sent in the body not specified in the DTOs
      whitelist: true,
      // stop incoming requests that contain extra properties besides the ones specified in the DTOs
      forbidNonWhitelisted: true,
    }),
  );

  // Swagger
  const options = new DocumentBuilder()
    .setTitle('Message Board API')
    .setDescription('Example API built with Nestjs')
    .setVersion('1.0')
    .setSchemes(process.env.NODE_ENV === 'production' ? 'https' : 'http')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  // Application start
  const port = app.get('ConfigService').port;
  await app.listen(port);
  console.log(`App listening on port ${port}`);
}
bootstrap();
