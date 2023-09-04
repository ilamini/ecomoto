import { SortOrder } from "../../util/SortOrder";

export type CommunityFeedOrderByInput = {
  communityId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  ds?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
