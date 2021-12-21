import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ScheduleModule } from '@nestjs/schedule'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PrismaService } from './prisma.service'
import { RemixMiddleware } from './remix.middleware'

@Module({
  imports: [ScheduleModule.forRoot()],
  providers: [AppService, PrismaService],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RemixMiddleware).exclude('api', 'api/(.*)').forRoutes('*')
  }
}
