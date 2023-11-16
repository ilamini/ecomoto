import { FeedLike as TFeedLike } from "../api/feedLike/FeedLike";

export const FEEDLIKE_TITLE_FIELD = "id";

export const FeedLikeTitle = (record: TFeedLike): string => {
  return record.id?.toString() || String(record.id);
};
