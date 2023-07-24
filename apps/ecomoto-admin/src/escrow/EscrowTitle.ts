import { Escrow as TEscrow } from "../api/escrow/Escrow";

export const ESCROW_TITLE_FIELD = "blockchainHash";

export const EscrowTitle = (record: TEscrow): string => {
  return record.blockchainHash || String(record.id);
};
