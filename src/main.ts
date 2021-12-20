import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import compression from 'compression'
import express from 'express'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(compression());

  // Setup for remix
  // You may want to be more aggressive with this caching
  app.use(express.static("public", { maxAge: "1h" }));

  // Remix fingerprints its assets so we can cache forever
  app.use(express.static("public/build", { immutable: true, maxAge: "1y" }));

  const port = process.env.PORT || 3333
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost: ' + port)
  });
}

bootstrap();
