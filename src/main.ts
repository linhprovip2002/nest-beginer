import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { useSwagger } from './common/swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  useSwagger(app);
  await app.listen(3000);
}
bootstrap();
