import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PingModule } from './ping/ping.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, PingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
