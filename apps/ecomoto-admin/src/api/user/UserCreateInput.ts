import { CarCreateNestedManyWithoutUsersInput } from "./CarCreateNestedManyWithoutUsersInput";
import { NotificationCreateNestedManyWithoutUsersInput } from "./NotificationCreateNestedManyWithoutUsersInput";
import { RentalCreateNestedManyWithoutUsersInput } from "./RentalCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  cars?: CarCreateNestedManyWithoutUsersInput;
  deletedAt?: Date | null;
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationCreateNestedManyWithoutUsersInput;
  password: string;
  rentals?: RentalCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  username: string;
  userType: "Lessee" | "Lessor";
};
