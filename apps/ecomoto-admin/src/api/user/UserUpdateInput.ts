import { CarUpdateManyWithoutUsersInput } from "./CarUpdateManyWithoutUsersInput";
import { NotificationUpdateManyWithoutUsersInput } from "./NotificationUpdateManyWithoutUsersInput";
import { RentalUpdateManyWithoutUsersInput } from "./RentalUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  cars?: CarUpdateManyWithoutUsersInput;
  deletedAt?: Date | null;
  email?: string;
  firstName?: string | null;
  lastName?: string | null;
  notifications?: NotificationUpdateManyWithoutUsersInput;
  password?: string;
  rentals?: RentalUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
  userType?: "Lessee" | "Lessor";
};
