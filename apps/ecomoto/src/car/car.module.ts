import { Module } from "@nestjs/common";
import { CarModuleBase } from "./base/car.module.base";
import { CarService } from "./car.service";
import { CarResolver } from "./car.resolver";

@Module({
  imports: [CarModuleBase],
  providers: [CarService, CarResolver],
  exports: [CarService],
})
export class CarModule {}
