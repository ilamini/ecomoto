import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";

export type CarImageCreateInput = {
  carId: CarWhereUniqueInput;
  deletedAt?: string | null;
  imageUrl: string;
};
