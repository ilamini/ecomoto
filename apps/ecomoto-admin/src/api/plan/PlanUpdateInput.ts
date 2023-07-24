import { RentalUpdateManyWithoutPlansInput } from "./RentalUpdateManyWithoutPlansInput";

export type PlanUpdateInput = {
  name?: string;
  rentals?: RentalUpdateManyWithoutPlansInput;
};
