import { SortOrder } from "../../util/SortOrder";

export type MediaOrderByInput = {
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  updatedAt?: SortOrder;
  userFeedId?: SortOrder;
  videoUrl?: SortOrder;
};
