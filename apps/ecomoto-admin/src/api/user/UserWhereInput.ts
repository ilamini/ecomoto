import { CarListRelationFilter } from "../car/CarListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { NotificationListRelationFilter } from "../notification/NotificationListRelationFilter";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";

export type UserWhereInput = {
  cars?: CarListRelationFilter;
  deletedAt?: DateTimeNullableFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  notifications?: NotificationListRelationFilter;
  rentals?: RentalListRelationFilter;
  username?: StringFilter;
  userType?: "Lessee" | "Lessor";
};
