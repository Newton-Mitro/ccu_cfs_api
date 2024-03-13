import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.SERVER_PORT || 3000;
  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  // app.useGlobalFilters(new HttpExceptionFilter()); // Alternative technique
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidUnknownValues: true,
      stopAtFirstError: true,
      disableErrorMessages: false,
      // exceptionFactory: (errors: ValidationError[]) => {
      //   try {
      //     const result = errors.map((error) => ({
      //       property: error.property,
      //       message: error.constraints[Object.keys(error.constraints)[0]],
      //     }));

      //     return new BadRequestException(result);
      //   } catch (error) {
      //     return new BadRequestException(errors);
      //   }
      // },

      // exceptionFactory: (errors: ValidationError[]) => {
      //   try {
      //     const result = errors.reduce((obj, error) => {
      //       Object.assign(obj, {
      //         [error.property]:
      //           error.constraints[Object.keys(error.constraints)[0]],
      //       });
      //       return obj;
      //     }, {});
      //     return new BadRequestException(result);
      //   } catch (error) {
      //     return new BadRequestException(errors);
      //   }
      // },
    }),
  );

  await app.listen(port);
}
bootstrap();
