import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type NotificationWhereInput = {
  deletedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  isRead?: BooleanNullableFilter;
  message?: StringFilter;
  userId?: UserWhereUniqueInput;
};
