import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RentalWhereUniqueInput } from "../rental/RentalWhereUniqueInput";

export type EscrowWhereInput = {
  blockchainHash?: StringNullableFilter;
  deletedAt?: StringNullableFilter;
  depositAmount?: FloatNullableFilter;
  depositStatus?: "Active" | "Settled" | "Reversed";
  id?: StringFilter;
  rentalId?: RentalWhereUniqueInput;
};
