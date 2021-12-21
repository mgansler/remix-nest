import { Injectable, Logger } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'
import { PrismaService } from './prisma.service'

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  async cron() {
    const users = await this.prisma.user.findMany()
    Logger.log('Hello, there are ' + users.length + ' users registered.')
  }
}
