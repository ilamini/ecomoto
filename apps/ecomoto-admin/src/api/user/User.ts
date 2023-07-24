import { Car } from "../car/Car";
import { Notification } from "../notification/Notification";
import { Rental } from "../rental/Rental";
import { JsonValue } from "type-fest";

export type User = {
  cars?: Array<Car>;
  createdAt: Date;
  deletedAt: Date | null;
  email: string;
  firstName: string | null;
  id: string;
  lastName: string | null;
  notifications?: Array<Notification>;
  rentals?: Array<Rental>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  userType?: "Lessee" | "Lessor";
};
