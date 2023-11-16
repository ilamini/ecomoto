import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FeedLikeModuleBase } from "./base/feedLike.module.base";
import { FeedLikeService } from "./feedLike.service";
import { FeedLikeResolver } from "./feedLike.resolver";

@Module({
  imports: [FeedLikeModuleBase, forwardRef(() => AuthModule)],
  providers: [FeedLikeService, FeedLikeResolver],
  exports: [FeedLikeService],
})
export class FeedLikeModule {}
