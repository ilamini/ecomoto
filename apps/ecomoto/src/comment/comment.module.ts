import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CommentModuleBase } from "./base/comment.module.base";
import { CommentService } from "./comment.service";
import { CommentResolver } from "./comment.resolver";

@Module({
  imports: [CommentModuleBase, forwardRef(() => AuthModule)],
  providers: [CommentService, CommentResolver],
  exports: [CommentService],
})
export class CommentModule {}
