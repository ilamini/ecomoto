import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CommunityModuleBase } from "./base/community.module.base";
import { CommunityService } from "./community.service";
import { CommunityResolver } from "./community.resolver";

@Module({
  imports: [CommunityModuleBase, forwardRef(() => AuthModule)],
  providers: [CommunityService, CommunityResolver],
  exports: [CommunityService],
})
export class CommunityModule {}
