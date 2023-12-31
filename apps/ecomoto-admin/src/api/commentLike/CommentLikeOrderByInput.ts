import { SortOrder } from "../../util/SortOrder";

export type CommentLikeOrderByInput = {
  commentId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
