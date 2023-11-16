import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeedLikeServiceBase } from "./base/feedLike.service.base";

@Injectable()
export class FeedLikeService extends FeedLikeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
