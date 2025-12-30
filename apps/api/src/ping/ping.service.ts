import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PingService {
  constructor(private readonly prisma: PrismaService) {}

  getRecentPings(limit = 5) {
    return this.prisma.ping.findMany({
      take: limit,
      orderBy: { createdAt: 'desc' },
    });
  }
}
