import { UserFeed as TUserFeed } from "../api/userFeed/UserFeed";

export const USERFEED_TITLE_FIELD = "content";

export const UserFeedTitle = (record: TUserFeed): string => {
  return record.content?.toString() || String(record.id);
};
