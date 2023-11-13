import { Test, TestingModule } from '@nestjs/testing';
import { ReporttimeonController } from './reporttimeon.controller';
import { ReporttimeonService } from './reporttimeon.service';

describe('ReporttimeonController', () => {
  let controller: ReporttimeonController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReporttimeonController],
      providers: [ReporttimeonService],
    }).compile();

    controller = module.get<ReporttimeonController>(ReporttimeonController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
