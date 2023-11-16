import { CommunityFeedWhereUniqueInput } from "../communityFeed/CommunityFeedWhereUniqueInput";

export type MediaCreateInput = {
  communittFeed?: CommunityFeedWhereUniqueInput | null;
  createdBy?: string | null;
  imageUrl?: string | null;
  videoUrl?: string | null;
};
