import { CarImageWhereInput } from "./CarImageWhereInput";
import { CarImageOrderByInput } from "./CarImageOrderByInput";

export type CarImageFindManyArgs = {
  where?: CarImageWhereInput;
  orderBy?: Array<CarImageOrderByInput>;
  skip?: number;
  take?: number;
};
