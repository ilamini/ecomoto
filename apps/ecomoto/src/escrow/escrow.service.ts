import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EscrowServiceBase } from "./base/escrow.service.base";

@Injectable()
export class EscrowService extends EscrowServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
