import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CarImageWhereInput = {
  carId?: CarWhereUniqueInput;
  deletedAt?: StringNullableFilter;
  id?: StringFilter;
};
