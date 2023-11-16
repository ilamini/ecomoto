import { SortOrder } from "../../util/SortOrder";

export type FeedLikeOrderByInput = {
  communityFeedId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  likedById?: SortOrder;
  updatedAt?: SortOrder;
};
