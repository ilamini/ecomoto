import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EscrowModuleBase } from "./base/escrow.module.base";
import { EscrowService } from "./escrow.service";
import { EscrowResolver } from "./escrow.resolver";

@Module({
  imports: [EscrowModuleBase, forwardRef(() => AuthModule)],
  providers: [EscrowService, EscrowResolver],
  exports: [EscrowService],
})
export class EscrowModule {}
