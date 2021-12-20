import { Controller, Get } from '@nestjs/common'

// We cannot use `app.setGlobalPrefix('api')` in `main.ts` because this also interferes with the web paths.
@Controller('api')
export class AppController {
  @Get()
  getApiIndex() {
    return 'getApiIndex'
  }
}
