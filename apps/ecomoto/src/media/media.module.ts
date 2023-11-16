import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MediaModuleBase } from "./base/media.module.base";
import { MediaService } from "./media.service";
import { MediaResolver } from "./media.resolver";

@Module({
  imports: [MediaModuleBase, forwardRef(() => AuthModule)],
  providers: [MediaService, MediaResolver],
  exports: [MediaService],
})
export class MediaModule {}
