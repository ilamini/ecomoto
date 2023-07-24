import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { EscrowWhereUniqueInput } from "../escrow/EscrowWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";

export type RentalCreateInput = {
  carId: CarWhereUniqueInput;
  currentLocation?: string | null;
  deletedAt?: Date | null;
  destination: string;
  destinationGeoLoc: string;
  escrows?: EscrowWhereUniqueInput | null;
  lesseeId: UserWhereUniqueInput;
  pickupAddress: string;
  pickupGeoLoc: string;
  pickupTime?: Date | null;
  planId: PlanWhereUniqueInput;
  rentalEndDatetime: Date;
  rentalRequestTime: Date;
  rentalStartDatetime: Date;
  rentalStatus?:
    | "Requesting"
    | "Accepted"
    | "Rejected"
    | "Active"
    | "Completed"
    | "Extended"
    | "Settled"
    | null;
};
