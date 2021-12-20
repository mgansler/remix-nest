import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { RemixMiddleware } from './remix.middleware'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports:[ScheduleModule.forRoot()],
  providers:[AppService],
  controllers: [AppController]
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RemixMiddleware).exclude('api','api/(.*)').forRoutes("*")
  }
}
