import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlanModuleBase } from "./base/plan.module.base";
import { PlanService } from "./plan.service";
import { PlanResolver } from "./plan.resolver";

@Module({
  imports: [PlanModuleBase, forwardRef(() => AuthModule)],
  providers: [PlanService, PlanResolver],
  exports: [PlanService],
})
export class PlanModule {}
