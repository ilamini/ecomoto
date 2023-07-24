import { EscrowWhereInput } from "./EscrowWhereInput";
import { EscrowOrderByInput } from "./EscrowOrderByInput";

export type EscrowFindManyArgs = {
  where?: EscrowWhereInput;
  orderBy?: Array<EscrowOrderByInput>;
  skip?: number;
  take?: number;
};
