import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CommentLikeServiceBase } from "./base/commentLike.service.base";

@Injectable()
export class CommentLikeService extends CommentLikeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
