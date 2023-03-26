import { Test, TestingModule } from '@nestjs/testing';
import { ReviseController } from './revise.controller';

describe('ReviseController', () => {
  let controller: ReviseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviseController],
    }).compile();

    controller = module.get<ReviseController>(ReviseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
