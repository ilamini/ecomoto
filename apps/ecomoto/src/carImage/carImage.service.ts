import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CarImageServiceBase } from "./base/carImage.service.base";

@Injectable()
export class CarImageService extends CarImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
