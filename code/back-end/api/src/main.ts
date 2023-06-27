import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ErrorHandlerMiddleware } from './middleware/errorhandler.middleware';
import { HttpExceptionFilter } from './common/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ErrorHandlerMiddleware());
  app.useGlobalFilters(new HttpExceptionFilter());
  const port = process.env.API_PORT || 3000
  await app.listen(port);
}
bootstrap();
