import { CarImageCreateNestedManyWithoutCarsInput } from "./CarImageCreateNestedManyWithoutCarsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { RentalCreateNestedManyWithoutCarsInput } from "./RentalCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  carImages?: CarImageCreateNestedManyWithoutCarsInput;
  deletedAt?: Date | null;
  lessorId: UserWhereUniqueInput;
  make: string;
  model: string;
  registrationInfo: string;
  rentals?: RentalCreateNestedManyWithoutCarsInput;
};
