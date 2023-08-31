import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NotificationModuleBase } from "./base/notification.module.base";
import { NotificationService } from "./notification.service";
import { NotificationResolver } from "./notification.resolver";

@Module({
  imports: [NotificationModuleBase, forwardRef(() => AuthModule)],
  providers: [NotificationService, NotificationResolver],
  exports: [NotificationService],
})
export class NotificationModule {}
