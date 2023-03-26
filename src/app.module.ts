import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjasModule } from './ninjas/ninjas.module';
import { UsersModule } from './users/users.module';
import { ReviseModule } from './revise/revise.module';

@Module({
  imports: [UsersModule, ReviseModule, NinjasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
