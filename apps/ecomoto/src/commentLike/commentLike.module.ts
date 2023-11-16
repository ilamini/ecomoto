import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CommentLikeModuleBase } from "./base/commentLike.module.base";
import { CommentLikeService } from "./commentLike.service";
import { CommentLikeResolver } from "./commentLike.resolver";

@Module({
  imports: [CommentLikeModuleBase, forwardRef(() => AuthModule)],
  providers: [CommentLikeService, CommentLikeResolver],
  exports: [CommentLikeService],
})
export class CommentLikeModule {}
