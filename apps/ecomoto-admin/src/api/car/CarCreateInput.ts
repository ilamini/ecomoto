import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { RentalCreateNestedManyWithoutCarsInput } from "./RentalCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  deletedAt?: Date | null;
  lessorId: UserWhereUniqueInput;
  make: string;
  model: string;
  parkedLocation?: InputJsonValue;
  registrationInfo: string;
  rentals?: RentalCreateNestedManyWithoutCarsInput;
};
