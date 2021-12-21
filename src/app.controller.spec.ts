import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'

describe('App Controller', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController]
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('index', () => {
    it('should return "getApiIndex"', () => {
      expect(appController.getApiIndex()).toBe('getApiIndex')
    })
  })
})
