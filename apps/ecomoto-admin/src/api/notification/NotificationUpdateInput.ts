import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationUpdateInput = {
  deletedAt?: Date | null;
  isRead?: boolean | null;
  message?: string;
  userId?: UserWhereUniqueInput;
};
