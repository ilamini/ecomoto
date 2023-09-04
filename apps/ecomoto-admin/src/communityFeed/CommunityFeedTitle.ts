import { CommunityFeed as TCommunityFeed } from "../api/communityFeed/CommunityFeed";

export const COMMUNITYFEED_TITLE_FIELD = "content";

export const CommunityFeedTitle = (record: TCommunityFeed): string => {
  return record.content || String(record.id);
};
