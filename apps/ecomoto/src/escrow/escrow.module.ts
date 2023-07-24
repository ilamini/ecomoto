import { Module } from "@nestjs/common";
import { EscrowModuleBase } from "./base/escrow.module.base";
import { EscrowService } from "./escrow.service";
import { EscrowResolver } from "./escrow.resolver";

@Module({
  imports: [EscrowModuleBase],
  providers: [EscrowService, EscrowResolver],
  exports: [EscrowService],
})
export class EscrowModule {}
