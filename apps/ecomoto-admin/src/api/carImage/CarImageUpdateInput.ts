import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";

export type CarImageUpdateInput = {
  carId?: CarWhereUniqueInput;
  deletedAt?: string | null;
  imageUrl?: string;
};
