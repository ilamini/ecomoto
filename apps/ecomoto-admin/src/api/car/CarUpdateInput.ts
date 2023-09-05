import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { RentalUpdateManyWithoutCarsInput } from "./RentalUpdateManyWithoutCarsInput";

export type CarUpdateInput = {
  deletedAt?: Date | null;
  lessorId?: UserWhereUniqueInput;
  make?: string;
  model?: string;
  parkedLocation?: InputJsonValue;
  registrationInfo?: string;
  rentals?: RentalUpdateManyWithoutCarsInput;
};
