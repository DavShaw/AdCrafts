import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log("AdCrafts is running on NestJS");
  console.log("Listening on port 3000");
  console.log("Let's jump in and start building some cool stuff!");
}
bootstrap();
