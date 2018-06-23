import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('NestJS TypeORM Evaluation')
  .setDescription('Simple Application for STI Tests')
  .setVersion('0.0.1')
  .setBasePath('api/v1')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.startAllMicroservicesAsync();
  app.setGlobalPrefix('api/v1');

  await app.listen(3002);
}
bootstrap();
