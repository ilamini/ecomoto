import { User } from "../user/User";

export type Notification = {
  createdAt: Date;
  deletedAt: Date | null;
  id: string;
  isRead: boolean | null;
  message: string;
  updatedAt: Date;
  userId?: User;
};
