import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  isRead?: SortOrder;
  message?: SortOrder;
  updatedAt?: SortOrder;
  userIdId?: SortOrder;
};
