import { Module } from '@nestjs/common';
import { ReviseController } from './revise.controller';

@Module({
  controllers: [ReviseController]
})
export class ReviseModule {}
