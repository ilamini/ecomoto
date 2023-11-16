import { Media as TMedia } from "../api/media/Media";

export const MEDIA_TITLE_FIELD = "createdBy";

export const MediaTitle = (record: TMedia): string => {
  return record.createdBy?.toString() || String(record.id);
};
