import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  id?: SortOrder;
  lessorIdId?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
  parkedLocation?: SortOrder;
  registrationInfo?: SortOrder;
  updatedAt?: SortOrder;
};
