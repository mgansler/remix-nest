import { Injectable, Logger } from '@nestjs/common'
import { Cron, CronExpression } from '@nestjs/schedule'

@Injectable()
export class AppService {
  @Cron(CronExpression.EVERY_MINUTE)
  cron() {
    Logger.log('Hello...')
  }
}
