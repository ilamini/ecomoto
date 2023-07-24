import { Rental } from "../rental/Rental";

export type Plan = {
  createdAt: Date;
  id: string;
  name: string;
  rentals?: Array<Rental>;
  updatedAt: Date;
};
