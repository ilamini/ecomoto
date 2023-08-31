import { CarImageCreateNestedManyWithoutCarsInput } from "./CarImageCreateNestedManyWithoutCarsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { RentalCreateNestedManyWithoutCarsInput } from "./RentalCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  carImages?: CarImageCreateNestedManyWithoutCarsInput;
  deletedAt?: Date | null;
  lessorId: UserWhereUniqueInput;
  make: string;
  model: string;
  parkedLocation?: InputJsonValue;
  registrationInfo: string;
  rentals?: RentalCreateNestedManyWithoutCarsInput;
};
