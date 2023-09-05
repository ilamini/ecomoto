import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";

export type CarWhereInput = {
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  lessorId?: UserWhereUniqueInput;
  make?: StringFilter;
  model?: StringFilter;
  parkedLocation?: JsonFilter;
  registrationInfo?: StringFilter;
  rentals?: RentalListRelationFilter;
};
