import { RentalWhereUniqueInput } from "../rental/RentalWhereUniqueInput";

export type EscrowCreateInput = {
  blockchainHash?: string | null;
  deletedAt?: string | null;
  depositAmount?: number | null;
  depositStatus: "Active" | "Settled" | "Reversed";
  rentalId: RentalWhereUniqueInput;
};
