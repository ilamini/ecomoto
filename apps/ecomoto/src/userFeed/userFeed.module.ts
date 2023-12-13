import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserFeedModuleBase } from "./base/userFeed.module.base";
import { UserFeedService } from "./userFeed.service";
import { UserFeedResolver } from "./userFeed.resolver";

@Module({
  imports: [UserFeedModuleBase, forwardRef(() => AuthModule)],
  providers: [UserFeedService, UserFeedResolver],
  exports: [UserFeedService],
})
export class UserFeedModule {}
