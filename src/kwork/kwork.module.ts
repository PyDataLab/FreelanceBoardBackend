import { Module } from '@nestjs/common';
import { KworkService } from './kwork.service';
import { KworkController } from './kwork.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [KworkController],
  providers: [KworkService, PrismaService],
})
export class KworkModule {}
