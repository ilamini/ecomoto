import { CommunityFeedWhereUniqueInput } from "../communityFeed/CommunityFeedWhereUniqueInput";

export type MediaUpdateInput = {
  communittFeed?: CommunityFeedWhereUniqueInput | null;
  createdBy?: string | null;
  imageUrl?: string | null;
  videoUrl?: string | null;
};
