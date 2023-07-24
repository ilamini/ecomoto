import { Module } from "@nestjs/common";
import { NotificationModuleBase } from "./base/notification.module.base";
import { NotificationService } from "./notification.service";
import { NotificationResolver } from "./notification.resolver";

@Module({
  imports: [NotificationModuleBase],
  providers: [NotificationService, NotificationResolver],
  exports: [NotificationService],
})
export class NotificationModule {}
