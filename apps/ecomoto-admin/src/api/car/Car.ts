import { CarImage } from "../carImage/CarImage";
import { User } from "../user/User";
import { Rental } from "../rental/Rental";

export type Car = {
  carImages?: Array<CarImage>;
  createdAt: Date;
  deletedAt: Date | null;
  id: string;
  lessorId?: User;
  make: string;
  model: string;
  registrationInfo: string;
  rentals?: Array<Rental>;
  updatedAt: Date;
};
