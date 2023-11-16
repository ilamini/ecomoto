import { Community as TCommunity } from "../api/community/Community";

export const COMMUNITY_TITLE_FIELD = "name";

export const CommunityTitle = (record: TCommunity): string => {
  return record.name?.toString() || String(record.id);
};
