import { StringFilter } from "../../util/StringFilter";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";

export type PlanWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  rentals?: RentalListRelationFilter;
};
