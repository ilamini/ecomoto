import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CommunityFeedModuleBase } from "./base/communityFeed.module.base";
import { CommunityFeedService } from "./communityFeed.service";
import { CommunityFeedResolver } from "./communityFeed.resolver";

@Module({
  imports: [CommunityFeedModuleBase, forwardRef(() => AuthModule)],
  providers: [CommunityFeedService, CommunityFeedResolver],
  exports: [CommunityFeedService],
})
export class CommunityFeedModule {}
