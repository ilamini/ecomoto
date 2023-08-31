import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CarImageModuleBase } from "./base/carImage.module.base";
import { CarImageService } from "./carImage.service";
import { CarImageResolver } from "./carImage.resolver";

@Module({
  imports: [CarImageModuleBase, forwardRef(() => AuthModule)],
  providers: [CarImageService, CarImageResolver],
  exports: [CarImageService],
})
export class CarImageModule {}
