import { Module } from "@nestjs/common";
import { PlanModuleBase } from "./base/plan.module.base";
import { PlanService } from "./plan.service";
import { PlanResolver } from "./plan.resolver";

@Module({
  imports: [PlanModuleBase],
  providers: [PlanService, PlanResolver],
  exports: [PlanService],
})
export class PlanModule {}
