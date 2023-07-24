import { Car } from "../car/Car";

export type CarImage = {
  carId?: Car;
  createdAt: Date;
  deletedAt: string | null;
  id: string;
  imageUrl: string;
  updatedAt: Date;
};
