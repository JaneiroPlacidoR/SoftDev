import { Test, TestingModule } from '@nestjs/testing';
import { ReporttimeonService } from './reporttimeon.service';

describe('ReporttimeonService', () => {
  let service: ReporttimeonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReporttimeonService],
    }).compile();

    service = module.get<ReporttimeonService>(ReporttimeonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
