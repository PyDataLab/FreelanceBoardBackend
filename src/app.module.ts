import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KworkModule } from './kwork/kwork.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [KworkModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
