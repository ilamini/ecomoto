import { CarImage as TCarImage } from "../api/carImage/CarImage";

export const CARIMAGE_TITLE_FIELD = "deletedAt";

export const CarImageTitle = (record: TCarImage): string => {
  return record.deletedAt || String(record.id);
};
