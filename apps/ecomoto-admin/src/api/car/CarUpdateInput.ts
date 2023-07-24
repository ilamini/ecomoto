import { CarImageUpdateManyWithoutCarsInput } from "./CarImageUpdateManyWithoutCarsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RentalUpdateManyWithoutCarsInput } from "./RentalUpdateManyWithoutCarsInput";

export type CarUpdateInput = {
  carImages?: CarImageUpdateManyWithoutCarsInput;
  deletedAt?: Date | null;
  lessorId?: UserWhereUniqueInput;
  make?: string;
  model?: string;
  registrationInfo?: string;
  rentals?: RentalUpdateManyWithoutCarsInput;
};
