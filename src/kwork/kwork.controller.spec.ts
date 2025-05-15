import { Test, TestingModule } from '@nestjs/testing';
import { KworkController } from './kwork.controller';
import { KworkService } from './kwork.service';

describe('KworkController', () => {
  let controller: KworkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KworkController],
      providers: [KworkService],
    }).compile();

    controller = module.get<KworkController>(KworkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
