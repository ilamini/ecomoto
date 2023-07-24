import { Rental } from "../rental/Rental";

export type Escrow = {
  blockchainHash: string | null;
  createdAt: Date;
  deletedAt: string | null;
  depositAmount: number | null;
  depositStatus?: "Active" | "Settled" | "Reversed";
  id: string;
  rentalId?: Rental;
  updatedAt: Date;
};
