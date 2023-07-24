import { SortOrder } from "../../util/SortOrder";

export type RentalOrderByInput = {
  carIdId?: SortOrder;
  createdAt?: SortOrder;
  currentLocation?: SortOrder;
  deletedAt?: SortOrder;
  destination?: SortOrder;
  destinationGeoLoc?: SortOrder;
  escrowsId?: SortOrder;
  id?: SortOrder;
  lesseeIdId?: SortOrder;
  pickupAddress?: SortOrder;
  pickupGeoLoc?: SortOrder;
  pickupTime?: SortOrder;
  sa?: SortOrder;
  rentalEndDatetime?: SortOrder;
  rentalRequestTime?: SortOrder;
  rentalStartDatetime?: SortOrder;
  rentalStatus?: SortOrder;
  updatedAt?: SortOrder;
};
