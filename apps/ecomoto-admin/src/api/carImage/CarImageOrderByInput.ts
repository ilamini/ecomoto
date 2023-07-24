import { SortOrder } from "../../util/SortOrder";

export type CarImageOrderByInput = {
  carIdId?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  updatedAt?: SortOrder;
};
