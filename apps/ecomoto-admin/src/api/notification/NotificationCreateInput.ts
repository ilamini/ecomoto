import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationCreateInput = {
  deletedAt?: Date | null;
  isRead?: boolean | null;
  message: string;
  userId: UserWhereUniqueInput;
};
