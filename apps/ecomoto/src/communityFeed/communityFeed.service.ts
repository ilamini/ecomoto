import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommunityFeedServiceBase } from "./base/communityFeed.service.base";

@Injectable()
export class CommunityFeedService extends CommunityFeedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
