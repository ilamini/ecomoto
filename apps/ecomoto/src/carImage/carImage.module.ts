import { Module } from "@nestjs/common";
import { CarImageModuleBase } from "./base/carImage.module.base";
import { CarImageService } from "./carImage.service";
import { CarImageResolver } from "./carImage.resolver";

@Module({
  imports: [CarImageModuleBase],
  providers: [CarImageService, CarImageResolver],
  exports: [CarImageService],
})
export class CarImageModule {}
