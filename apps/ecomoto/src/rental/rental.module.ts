import { Module } from "@nestjs/common";
import { RentalModuleBase } from "./base/rental.module.base";
import { RentalService } from "./rental.service";
import { RentalResolver } from "./rental.resolver";

@Module({
  imports: [RentalModuleBase],
  providers: [RentalService, RentalResolver],
  exports: [RentalService],
})
export class RentalModule {}
