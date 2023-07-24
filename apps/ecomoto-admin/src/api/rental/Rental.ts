import { Car } from "../car/Car";
import { Escrow } from "../escrow/Escrow";
import { User } from "../user/User";
import { Plan } from "../plan/Plan";

export type Rental = {
  carId?: Car;
  createdAt: Date;
  currentLocation: string | null;
  deletedAt: Date | null;
  destination: string;
  destinationGeoLoc: string;
  escrows?: Escrow | null;
  id: string;
  lesseeId?: User;
  pickupAddress: string;
  pickupGeoLoc: string;
  pickupTime: Date | null;
  planId?: Plan;
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
  updatedAt: Date;
};
