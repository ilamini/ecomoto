import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Rental } from "../rental/Rental";

export type Car = {
  createdAt: Date;
  deletedAt: Date | null;
  id: string;
  lessorId?: User;
  make: string;
  model: string;
  parkedLocation: JsonValue;
  registrationInfo: string;
  rentals?: Array<Rental>;
  updatedAt: Date;
};
