import { SortOrder } from "../../util/SortOrder";

export type EscrowOrderByInput = {
  blockchainHash?: SortOrder;
  createdAt?: SortOrder;
  deletedAt?: SortOrder;
  depositAmount?: SortOrder;
  depositStatus?: SortOrder;
  id?: SortOrder;
  rental_id?: SortOrder;
  updatedAt?: SortOrder;
};
