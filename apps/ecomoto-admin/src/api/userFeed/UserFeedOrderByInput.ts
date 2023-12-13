import { SortOrder } from "../../util/SortOrder";

export type UserFeedOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  user_id?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
