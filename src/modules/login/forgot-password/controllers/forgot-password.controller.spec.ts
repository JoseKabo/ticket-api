import { Test, TestingModule } from '@nestjs/testing';
import { ForgotPassword } from './forgot-password.controller';

describe('Controller', () => {
  let controller: ForgotPassword;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForgotPassword],
    }).compile();

    controller = module.get<ForgotPassword>(ForgotPassword);
  });

  it('should be defined', () => {
    expect(ForgotPassword).toBeDefined();
  });
});
