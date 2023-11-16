import { SortOrder } from "../../util/SortOrder";

export type MediaOrderByInput = {
  communittFeedId?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  updatedAt?: SortOrder;
  videoUrl?: SortOrder;
};
