import { Test, TestingModule } from '@nestjs/testing';
import { KworkService } from './kwork.service';

describe('KworkService', () => {
  let service: KworkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KworkService],
    }).compile();

    service = module.get<KworkService>(KworkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
