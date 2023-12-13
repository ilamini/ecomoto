import { SortOrder } from "../../util/SortOrder";

export type CommentOrderByInput = {
  comments?: SortOrder;
  createdAt?: SortOrder;
  user_id?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userFeedId?: SortOrder;
};
