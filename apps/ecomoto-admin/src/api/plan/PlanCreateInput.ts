import { RentalCreateNestedManyWithoutPlansInput } from "./RentalCreateNestedManyWithoutPlansInput";

export type PlanCreateInput = {
  name: string;
  rentals?: RentalCreateNestedManyWithoutPlansInput;
};
