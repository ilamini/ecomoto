import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserFeedServiceBase } from "./base/userFeed.service.base";

@Injectable()
export class UserFeedService extends UserFeedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
