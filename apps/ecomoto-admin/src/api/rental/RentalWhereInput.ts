import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { EscrowWhereUniqueInput } from "../escrow/EscrowWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type RentalWhereInput = {
  currentLocation?: StringNullableFilter;
  deletedAt?: DateTimeNullableFilter;
  destination?: StringFilter;
  destinationGeoLoc?: StringFilter;
  escrows?: EscrowWhereUniqueInput;
  id?: StringFilter;
  lesseeId?: UserWhereUniqueInput;
  pickupAddress?: StringFilter;
  pickupGeoLoc?: StringFilter;
  planId?: PlanWhereUniqueInput;
  rentalEndDatetime?: DateTimeFilter;
  rentalRequestTime?: DateTimeFilter;
  rentalStartDatetime?: DateTimeFilter;
  rentalStatus?:
    | "Requesting"
    | "Accepted"
    | "Rejected"
    | "Active"
    | "Completed"
    | "Extended"
    | "Settled";
};
