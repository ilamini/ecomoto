import { Rental as TRental } from "../api/rental/Rental";

export const RENTAL_TITLE_FIELD = "destination";

export const RentalTitle = (record: TRental): string => {
  return record.destination || String(record.id);
};
