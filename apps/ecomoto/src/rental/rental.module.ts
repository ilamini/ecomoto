import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RentalModuleBase } from "./base/rental.module.base";
import { RentalService } from "./rental.service";
import { RentalResolver } from "./rental.resolver";

@Module({
  imports: [RentalModuleBase, forwardRef(() => AuthModule)],
  providers: [RentalService, RentalResolver],
  exports: [RentalService],
})
export class RentalModule {}
